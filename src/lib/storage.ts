import type { AppState } from '../types';
import { detectLang } from '../i18n/languages';

const STORAGE_KEY = 'nykter-appstate-v2';

export function makeDefaultState(): AppState {
  return {
    soberSince: null,
    name: '',
    lang: detectLang(),
    steps: {},
    notifications: { enabled: false, morningTime: '08:00', eveningTime: '20:00' },
    lastCheckIn: { morningDate: null, eveningDate: null },
  };
}

export function loadState(): AppState {
  const fallback = makeDefaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return {
      ...fallback,
      ...parsed,
      notifications: { ...fallback.notifications, ...(parsed.notifications ?? {}) },
      lastCheckIn: { ...fallback.lastCheckIn, ...(parsed.lastCheckIn ?? {}) },
    };
  } catch {
    return fallback;
  }
}

export function saveState(state: AppState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private mode etc) — fail silently, app still works in-memory
  }
}
