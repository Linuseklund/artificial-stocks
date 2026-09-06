import { useEffect, useMemo, useRef, useState } from 'react';
import { reasons } from '../data/reasons';
import { suggestions } from '../data/suggestions';
import { useI18n } from '../i18n/context';
import type { VoiceSettings } from '../types';
import { speak, speechSupported, stopSpeaking, waitForVoices } from '../lib/speech';

interface Props {
  voice: VoiceSettings;
  onClose: () => void;
}

function pickRandom<T>(arr: T[], excludeIndex?: number): { item: T; index: number } {
  let index = Math.floor(Math.random() * arr.length);
  if (arr.length > 1 && index === excludeIndex) {
    index = (index + 1) % arr.length;
  }
  return { item: arr[index], index };
}

export default function UrgeModal({ voice, onClose }: Props) {
  const { t, lang } = useI18n();
  const reasonPool = reasons[lang];
  const suggestionPool = suggestions[lang];

  const initialReason = useMemo(() => pickRandom(reasonPool), [reasonPool]);
  const initialSuggestion = useMemo(() => pickRandom(suggestionPool), [suggestionPool]);

  const [reason, setReason] = useState(initialReason);
  const [suggestion, setSuggestion] = useState(initialSuggestion);
  const [speaking, setSpeaking] = useState(false);

  const canSpeak = speechSupported() && voice.enabled;
  // The icon is decorative and reads badly aloud, so only the text is spoken.
  const spokenAdvice = `${reason.item} ${suggestion.item.text}`;
  const adviceRef = useRef(spokenAdvice);
  adviceRef.current = spokenAdvice;

  function readAloud(text: string) {
    if (!canSpeak) return;
    speak(text, {
      lang,
      rate: voice.rate,
      voiceURI: voice.voiceURI || undefined,
      onStart: () => setSpeaking(true),
      onEnd: () => setSpeaking(false),
    });
  }

  useEffect(() => {
    if (!canSpeak || !voice.autoSpeakUrge) return;
    let cancelled = false;
    void waitForVoices().then(() => {
      if (!cancelled) readAloud(adviceRef.current);
    });
    return () => {
      cancelled = true;
      stopSpeaking();
    };
    // Auto-play happens once, for the advice shown when the modal opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => stopSpeaking, []);

  function newSuggestion() {
    setSuggestion((prev) => pickRandom(suggestionPool, prev.index));
  }

  function newReason() {
    setReason((prev) => pickRandom(reasonPool, prev.index));
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-6">
      <div className="w-full max-w-sm bg-white dark:bg-neutral-900 rounded-3xl shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="px-6 pt-7 pb-2 text-center">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
            {t.urge.modalTitle}
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 leading-relaxed">
            {t.urge.modalSubtitle}
          </p>
        </div>

        <div className="px-6 py-5 space-y-3">
          <section className="rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 p-4">
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
              {t.urge.reasonLabel}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 text-sm leading-relaxed">{reason.item}</p>
            <button
              onClick={newReason}
              className="mt-3 text-xs font-medium text-emerald-700 dark:text-emerald-400 underline underline-offset-2"
            >
              {t.urge.reasonAnother}
            </button>
          </section>

          <section className="rounded-2xl bg-amber-50 dark:bg-amber-950/30 p-4">
            <p className="text-xs font-medium text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
              {t.urge.suggestionLabel}
            </p>
            <div className="flex items-start gap-3">
              <span className="text-xl leading-none">{suggestion.item.icon}</span>
              <p className="text-amber-950 dark:text-amber-100 text-sm leading-relaxed">{suggestion.item.text}</p>
            </div>
            <button
              onClick={newSuggestion}
              className="mt-3 text-xs font-medium text-amber-700 dark:text-amber-400 underline underline-offset-2"
            >
              {t.urge.suggestionAnother}
            </button>
          </section>

          {canSpeak && (
            <button
              onClick={() => (speaking ? (stopSpeaking(), setSpeaking(false)) : readAloud(spokenAdvice))}
              className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium py-3 flex items-center justify-center gap-2"
            >
              <span>{speaking ? '⏹️' : '🔊'}</span>
              {speaking ? t.voice.stop : t.voice.listenAloud}
            </button>
          )}
        </div>

        <div className="px-6 pb-6 pt-1 space-y-3">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-neutral-900 dark:bg-emerald-600 text-white font-medium text-base py-3.5 hover:bg-neutral-800 dark:hover:bg-emerald-500 active:bg-neutral-950 transition-colors"
          >
            {t.urge.dismiss}
          </button>
          <p className="text-center text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed">
            {t.urge.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
