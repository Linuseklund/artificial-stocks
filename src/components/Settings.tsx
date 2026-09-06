import { useEffect, useState } from 'react';
import type { AppState } from '../types';
import { useI18n } from '../i18n/context';
import { languages, languageLabels, type Lang } from '../i18n/languages';
import {
  notificationsSupported,
  requestNotificationPermission,
  sendTestNotification,
} from '../lib/notifications';
import { listVoices, speak, speechSupported, stopSpeaking, waitForVoices } from '../lib/speech';
import { voiceReplies } from '../data/voiceScripts';

interface Props {
  state: AppState;
  onUpdateProfile: (name: string, soberSince: string) => void;
  onUpdateState: (next: AppState) => void;
  onReset: () => void;
}

function toLocalInputValue(iso: string): string {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function Settings({ state, onUpdateProfile, onUpdateState, onReset }: Props) {
  const { t, lang, setLang } = useI18n();
  const [name, setName] = useState(state.name);
  const [when, setWhen] = useState(state.soberSince ? toLocalInputValue(state.soberSince) : '');
  const [confirmReset, setConfirmReset] = useState(false);
  const [blocked, setBlocked] = useState(
    () => notificationsSupported() && Notification.permission === 'denied',
  );
  const [testSent, setTestSent] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  const voiceAvailable = speechSupported();

  useEffect(() => {
    if (!voiceAvailable) return;
    let cancelled = false;
    void waitForVoices().then(() => {
      if (!cancelled) setVoices(listVoices(lang));
    });
    return () => {
      cancelled = true;
      stopSpeaking();
    };
  }, [lang, voiceAvailable]);

  function updateVoice(patch: Partial<AppState['voice']>) {
    onUpdateState({ ...state, voice: { ...state.voice, ...patch } });
  }

  function testVoice(settings = state.voice) {
    const sample = voiceReplies[lang].general[1];
    speak(sample, { lang, rate: settings.rate, voiceURI: settings.voiceURI || undefined });
  }

  function save(e: React.FormEvent) {
    e.preventDefault();
    if (!when) return;
    onUpdateProfile(name.trim(), new Date(when).toISOString());
  }

  async function toggleNotifications() {
    if (state.notifications.enabled) {
      onUpdateState({ ...state, notifications: { ...state.notifications, enabled: false } });
      return;
    }
    const permission = await requestNotificationPermission();
    if (permission === 'granted') {
      onUpdateState({ ...state, notifications: { ...state.notifications, enabled: true } });
      setBlocked(false);
    } else {
      setBlocked(true);
    }
  }

  function updateTime(field: 'morningTime' | 'eveningTime', value: string) {
    onUpdateState({ ...state, notifications: { ...state.notifications, [field]: value } });
  }

  function handleTestNotification() {
    sendTestNotification(t);
    setTestSent(true);
    setTimeout(() => setTestSent(false), 2500);
  }

  return (
    <div className="px-4 pt-6 pb-24 max-w-md mx-auto w-full space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
          {t.settings.title}
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">{t.settings.subtitle}</p>
      </div>

      <section className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
        <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
          {t.settings.languageLabel}
        </p>
        <select
          aria-label={t.settings.languageLabel}
          value={lang}
          onChange={(e) => setLang(e.target.value as Lang)}
          className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-2.5 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        >
          {languages.map((l) => (
            <option key={l} value={l}>
              {languageLabels[l]}
            </option>
          ))}
        </select>
      </section>

      <form
        onSubmit={save}
        className="space-y-4 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4"
      >
        <div>
          <label htmlFor="s-name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
            {t.settings.nameLabel}
          </label>
          <input
            id="s-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-2.5 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>
        <div>
          <label htmlFor="s-when" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
            {t.settings.whenLabel}
          </label>
          <input
            id="s-when"
            type="datetime-local"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
            max={toLocalInputValue(new Date().toISOString())}
            className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-2.5 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <p className="text-xs text-neutral-400 mt-1.5">{t.settings.whenHint}</p>
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-neutral-900 dark:bg-emerald-600 text-white font-medium py-3 hover:bg-neutral-800 dark:hover:bg-emerald-500 transition-colors"
        >
          {t.settings.save}
        </button>
      </form>

      <section className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {t.settings.voiceTitle}
            </p>
            <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
              {voiceAvailable ? t.settings.voiceDescription : t.settings.voiceUnsupported}
            </p>
          </div>
          <button
            role="switch"
            aria-checked={state.voice.enabled}
            aria-label={t.settings.voiceEnable}
            onClick={() => {
              if (state.voice.enabled) stopSpeaking();
              updateVoice({ enabled: !state.voice.enabled });
            }}
            disabled={!voiceAvailable}
            className={`flex-none w-11 h-6 rounded-full transition-colors relative disabled:opacity-40 ${
              state.voice.enabled ? 'bg-emerald-600' : 'bg-neutral-200 dark:bg-neutral-700'
            }`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                state.voice.enabled ? 'translate-x-5' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        {voiceAvailable && state.voice.enabled && (
          <div className="space-y-3 pt-1">
            <div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">
                {t.settings.voiceSpeedLabel}
              </p>
              <div className="flex gap-2">
                {[
                  { rate: 0.75, label: t.settings.voiceSpeedSlow },
                  { rate: 0.85, label: t.settings.voiceSpeedCalm },
                  { rate: 1, label: t.settings.voiceSpeedNormal },
                ].map((option) => (
                  <button
                    key={option.rate}
                    onClick={() => {
                      updateVoice({ rate: option.rate });
                      testVoice({ ...state.voice, rate: option.rate });
                    }}
                    className={`flex-1 rounded-lg py-2 text-sm font-medium border transition-colors ${
                      state.voice.rate === option.rate
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {voices.length > 0 && (
              <div>
                <label
                  htmlFor="voice-pick"
                  className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5"
                >
                  {t.settings.voicePickLabel}
                </label>
                <select
                  id="voice-pick"
                  value={state.voice.voiceURI}
                  onChange={(e) => {
                    updateVoice({ voiceURI: e.target.value });
                    testVoice({ ...state.voice, voiceURI: e.target.value });
                  }}
                  className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2.5 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="">{t.settings.voiceAuto}</option>
                  {voices.map((v) => (
                    <option key={v.voiceURI} value={v.voiceURI}>
                      {v.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={state.voice.autoSpeakUrge}
                onChange={(e) => updateVoice({ autoSpeakUrge: e.target.checked })}
                className="mt-0.5 w-4 h-4 accent-emerald-600"
              />
              <span className="text-sm text-neutral-600 dark:text-neutral-300 leading-snug">
                {t.settings.voiceAutoSpeakUrge}
              </span>
            </label>

            <button
              onClick={() => testVoice()}
              className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium py-2.5"
            >
              {t.settings.voiceTest}
            </button>
          </div>
        )}
      </section>

      <section className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {t.settings.notificationsTitle}
            </p>
            <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
              {t.settings.notificationsDescription}
            </p>
          </div>
          <button
            role="switch"
            aria-checked={state.notifications.enabled}
            aria-label={t.settings.notificationsEnable}
            onClick={toggleNotifications}
            disabled={!notificationsSupported()}
            className={`flex-none w-11 h-6 rounded-full transition-colors relative disabled:opacity-40 ${
              state.notifications.enabled ? 'bg-emerald-600' : 'bg-neutral-200 dark:bg-neutral-700'
            }`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                state.notifications.enabled ? 'translate-x-5' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        {blocked && (
          <p className="text-xs text-red-600 dark:text-red-400">{t.settings.notificationsBlocked}</p>
        )}

        {state.notifications.enabled && (
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between gap-3">
              <label htmlFor="morning-time" className="text-sm text-neutral-600 dark:text-neutral-300">
                {t.settings.morningTimeLabel}
              </label>
              <input
                id="morning-time"
                type="time"
                value={state.notifications.morningTime}
                onChange={(e) => updateTime('morningTime', e.target.value)}
                className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1.5 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
            <div className="flex items-center justify-between gap-3">
              <label htmlFor="evening-time" className="text-sm text-neutral-600 dark:text-neutral-300">
                {t.settings.eveningTimeLabel}
              </label>
              <input
                id="evening-time"
                type="time"
                value={state.notifications.eveningTime}
                onChange={(e) => updateTime('eveningTime', e.target.value)}
                className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1.5 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
            <button
              onClick={handleTestNotification}
              className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium py-2.5"
            >
              {testSent ? t.settings.testSent : t.settings.sendTest}
            </button>
          </div>
        )}
      </section>

      <section className="bg-white dark:bg-neutral-900 rounded-2xl border border-red-100 dark:border-red-950 p-4">
        <p className="text-sm font-medium text-red-600 dark:text-red-400 mb-2">{t.settings.dangerTitle}</p>
        <p className="text-xs text-neutral-400 mb-3 leading-relaxed">{t.settings.dangerDescription}</p>
        {confirmReset ? (
          <div className="flex gap-2">
            <button
              onClick={onReset}
              className="flex-1 rounded-lg bg-red-600 text-white text-sm font-medium py-2.5"
            >
              {t.settings.dangerConfirm}
            </button>
            <button
              onClick={() => setConfirmReset(false)}
              className="flex-1 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium py-2.5"
            >
              {t.settings.dangerCancel}
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmReset(true)}
            className="w-full rounded-lg border border-red-200 dark:border-red-950 text-red-600 dark:text-red-400 text-sm font-medium py-2.5"
          >
            {t.settings.dangerButton}
          </button>
        )}
      </section>
    </div>
  );
}
