import { useEffect } from 'react';
import type { AppState } from '../types';
import type { UiStrings } from '../i18n/ui';
import { ui } from '../i18n/ui';
import { durationSince, todayKey } from './time';
import { formatStreakPhrase } from './format';

export function notificationsSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window;
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!notificationsSupported()) return 'denied';
  if (Notification.permission === 'granted' || Notification.permission === 'denied') {
    return Notification.permission;
  }
  return Notification.requestPermission();
}

async function showNotification(title: string, body: string) {
  if (!notificationsSupported() || Notification.permission !== 'granted') return;
  try {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        await registration.showNotification(title, { body, icon: `${import.meta.env.BASE_URL}favicon.svg` });
        return;
      }
    }
    new Notification(title, { body });
  } catch {
    // Notifications are best-effort; ignore failures (e.g. platform quirks).
  }
}

export function sendTestNotification(t: UiStrings) {
  void showNotification(t.notification.testTitle, t.notification.testBody);
}

/**
 * Checks once a minute whether it's time to fire the morning/evening reminder
 * for the current settings, using lastCheckIn dates to avoid repeats. This is
 * a client-only scheduler: it only fires while the app (tab or installed PWA)
 * is open somewhere, since there is no backend to wake a fully closed app.
 */
export function useNotificationScheduler(state: AppState, update: (next: AppState) => void) {
  useEffect(() => {
    const check = () => {
      if (!state.soberSince || !state.notifications.enabled) return;
      if (!notificationsSupported() || Notification.permission !== 'granted') return;

      const now = new Date();
      const hhmm = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const key = todayKey(now);
      const t = ui[state.lang];
      const streak = formatStreakPhrase(durationSince(state.soberSince, now), t);

      if (hhmm === state.notifications.morningTime && state.lastCheckIn.morningDate !== key) {
        void showNotification(t.notification.morningTitle, t.notification.morningBody(streak));
        update({ ...state, lastCheckIn: { ...state.lastCheckIn, morningDate: key } });
        return;
      }

      if (hhmm === state.notifications.eveningTime && state.lastCheckIn.eveningDate !== key) {
        void showNotification(t.notification.eveningTitle, t.notification.eveningBody(streak));
        update({ ...state, lastCheckIn: { ...state.lastCheckIn, eveningDate: key } });
      }
    };

    const id = setInterval(check, 30_000);
    return () => clearInterval(id);
  }, [state, update]);
}
