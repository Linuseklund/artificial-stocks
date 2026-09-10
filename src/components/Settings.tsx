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

const fieldClass =
  'w-full rounded-2xl bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-[16px] text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100';
const labelClass = 'block text-[13px] text-neutral-400 dark:text-neutral-500 mb-2';
const sectionTitleClass = 'text-[15px] text-neutral-900 dark:text-neutral-100';
const hintClass = 'text-[13px] text-neutral-400 dark:text-neutral-600 leading-relaxed';

function Toggle({
  checked,
  onChange,
  label,
  disabled,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    // The button is the hit area — 44pt tall per Apple's guidance — while the
    // pill inside keeps the 46x28 look. Nesting them keeps the thumb's target
    // generous without the control growing visually.
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      disabled={disabled}
      className="flex-none w-[46px] h-[44px] grid place-items-center disabled:opacity-30"
    >
      <span
        className={`relative block w-[46px] h-[28px] rounded-full transition-colors ${
          checked ? 'bg-neutral-900 dark:bg-neutral-50' : 'bg-neutral-200 dark:bg-neutral-800'
        }`}
      >
        <span
          className={`absolute left-0 top-[3px] w-[22px] h-[22px] rounded-full transition-transform ${
            checked
              ? 'translate-x-[21px] bg-white dark:bg-neutral-900'
              : 'translate-x-[3px] bg-white dark:bg-neutral-600'
          }`}
        />
      </span>
    </button>
  );
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
    <div className="page-shell max-w-md mx-auto w-full">
      <h1 className="font-serif text-[34px] leading-[1.1] text-neutral-900 dark:text-neutral-50">
        {t.settings.title}
      </h1>
      <p className="text-[15px] text-neutral-400 dark:text-neutral-500 mt-1">{t.settings.subtitle}</p>

      <div className="mt-4 divide-y divide-neutral-100 dark:divide-neutral-900">
        <section className="py-6">
          <label htmlFor="lang-pick" className={labelClass}>
            {t.settings.languageLabel}
          </label>
          <select
            id="lang-pick"
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className={fieldClass}
          >
            {languages.map((l) => (
              <option key={l} value={l}>
                {languageLabels[l]}
              </option>
            ))}
          </select>
        </section>

        <form onSubmit={save} className="py-6 space-y-5">
          <div>
            <label htmlFor="s-name" className={labelClass}>
              {t.settings.nameLabel}
            </label>
            <input
              id="s-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="s-when" className={labelClass}>
              {t.settings.whenLabel}
            </label>
            <input
              id="s-when"
              type="datetime-local"
              value={when}
              onChange={(e) => setWhen(e.target.value)}
              max={toLocalInputValue(new Date().toISOString())}
              className={fieldClass}
            />
            <p className={`${hintClass} mt-2`}>{t.settings.whenHint}</p>
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 font-medium text-[15px] py-3.5 hover:opacity-90 transition-opacity"
          >
            {t.settings.save}
          </button>
        </form>

        <section className="py-6 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className={sectionTitleClass}>{t.settings.voiceTitle}</p>
              <p className={`${hintClass} mt-1`}>
                {voiceAvailable ? t.settings.voiceDescription : t.settings.voiceUnsupported}
              </p>
            </div>
            <Toggle
              checked={state.voice.enabled}
              label={t.settings.voiceEnable}
              disabled={!voiceAvailable}
              onChange={() => {
                if (state.voice.enabled) stopSpeaking();
                updateVoice({ enabled: !state.voice.enabled });
              }}
            />
          </div>

          {voiceAvailable && state.voice.enabled && (
            <div className="space-y-5">
              <div>
                <p className={labelClass}>{t.settings.voiceSpeedLabel}</p>
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
                      className={`flex-1 rounded-xl py-3 text-[14px] min-h-[44px] transition-colors ${
                        state.voice.rate === option.rate
                          ? 'bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900'
                          : 'bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {voices.length > 0 && (
                <div>
                  <label htmlFor="voice-pick" className={labelClass}>
                    {t.settings.voicePickLabel}
                  </label>
                  <select
                    id="voice-pick"
                    value={state.voice.voiceURI}
                    onChange={(e) => {
                      updateVoice({ voiceURI: e.target.value });
                      testVoice({ ...state.voice, voiceURI: e.target.value });
                    }}
                    className={fieldClass}
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

              <p className={hintClass}>{t.settings.voiceQualityHint}</p>

              {/* py-1.5 lifts the whole row past a 44pt touch target; the label
                  wraps the box so the words are tappable too. */}
              <label className="flex items-start gap-3 py-1.5 min-h-[44px] cursor-pointer">
                <input
                  type="checkbox"
                  checked={state.voice.autoSpeakUrge}
                  onChange={(e) => updateVoice({ autoSpeakUrge: e.target.checked })}
                  className="mt-0.5 w-5 h-5 flex-none accent-neutral-900 dark:accent-neutral-50"
                />
                <span className="text-[14px] text-neutral-600 dark:text-neutral-400 leading-snug">
                  {t.settings.voiceAutoSpeakUrge}
                </span>
              </label>

              <button
                onClick={() => testVoice()}
                className="w-full rounded-xl bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 text-[14px] py-3"
              >
                {t.settings.voiceTest}
              </button>
            </div>
          )}
        </section>

        <section className="py-6 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className={sectionTitleClass}>{t.settings.notificationsTitle}</p>
              <p className={`${hintClass} mt-1`}>{t.settings.notificationsDescription}</p>
            </div>
            <Toggle
              checked={state.notifications.enabled}
              label={t.settings.notificationsEnable}
              disabled={!notificationsSupported()}
              onChange={toggleNotifications}
            />
          </div>

          {blocked && (
            <p className="text-[13px] text-amber-600 dark:text-amber-500 leading-relaxed">
              {t.settings.notificationsBlocked}
            </p>
          )}

          {state.notifications.enabled && (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <label htmlFor="morning-time" className="text-[15px] text-neutral-600 dark:text-neutral-400">
                  {t.settings.morningTimeLabel}
                </label>
                <input
                  id="morning-time"
                  type="time"
                  value={state.notifications.morningTime}
                  onChange={(e) => updateTime('morningTime', e.target.value)}
                  className="rounded-xl bg-neutral-50 dark:bg-neutral-900 px-3 py-2.5 text-[16px] text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100"
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <label htmlFor="evening-time" className="text-[15px] text-neutral-600 dark:text-neutral-400">
                  {t.settings.eveningTimeLabel}
                </label>
                <input
                  id="evening-time"
                  type="time"
                  value={state.notifications.eveningTime}
                  onChange={(e) => updateTime('eveningTime', e.target.value)}
                  className="rounded-xl bg-neutral-50 dark:bg-neutral-900 px-3 py-2.5 text-[16px] text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100"
                />
              </div>
              <button
                onClick={handleTestNotification}
                className="w-full rounded-xl bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 text-[14px] py-3"
              >
                {testSent ? t.settings.testSent : t.settings.sendTest}
              </button>
            </div>
          )}
        </section>

        <section className="py-6">
          <p className={sectionTitleClass}>{t.settings.dangerTitle}</p>
          <p className={`${hintClass} mt-1 mb-4`}>{t.settings.dangerDescription}</p>
          {confirmReset ? (
            <div className="flex gap-2">
              <button
                onClick={onReset}
                className="flex-1 rounded-xl bg-red-600 text-white text-[14px] py-3"
              >
                {t.settings.dangerConfirm}
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="flex-1 rounded-xl bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 text-[14px] py-3"
              >
                {t.settings.dangerCancel}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmReset(true)}
              className="w-full rounded-xl bg-neutral-50 dark:bg-neutral-900 text-red-600 dark:text-red-400 text-[14px] py-3"
            >
              {t.settings.dangerButton}
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
