import { useEffect, useMemo, useRef, useState } from 'react';
import { reasons } from '../data/reasons';
import { suggestions } from '../data/suggestions';
import { useI18n } from '../i18n/context';
import type { VoiceSettings } from '../types';
import { speak, speechSupported, stopSpeaking, waitForVoices } from '../lib/speech';
import Icon from './Icon';

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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-neutral-950/30 dark:bg-black/60 backdrop-blur-md px-4 py-6">
      <div className="w-full max-w-sm bg-white dark:bg-neutral-950 rounded-3xl max-h-[92vh] overflow-y-auto ring-1 ring-neutral-900/5 dark:ring-white/10">
        <div className="px-7 pt-9 pb-6">
          <h2 className="font-serif text-[30px] leading-[1.1] text-neutral-900 dark:text-neutral-50 text-balance">
            {t.urge.modalTitle}
          </h2>
          <p className="text-[15px] text-neutral-400 dark:text-neutral-500 mt-2 leading-relaxed">
            {t.urge.modalSubtitle}
          </p>
        </div>

        <div className="px-7 divide-y divide-neutral-100 dark:divide-neutral-900 border-t border-neutral-100 dark:border-neutral-900">
          <section className="py-5">
            <p className="text-[13px] text-neutral-400 dark:text-neutral-500 mb-2">
              {t.urge.reasonLabel}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 text-[15px] leading-relaxed">
              {reason.item}
            </p>
            <button
              onClick={newReason}
              className="mt-3 text-[13px] text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              {t.urge.reasonAnother}
            </button>
          </section>

          <section className="py-5">
            <p className="text-[13px] text-neutral-400 dark:text-neutral-500 mb-2">
              {t.urge.suggestionLabel}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 text-[15px] leading-relaxed">
              {suggestion.item.text}
            </p>
            <button
              onClick={newSuggestion}
              className="mt-3 text-[13px] text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              {t.urge.suggestionAnother}
            </button>
          </section>

          {canSpeak && (
            <button
              onClick={() => (speaking ? (stopSpeaking(), setSpeaking(false)) : readAloud(spokenAdvice))}
              className="w-full py-4 text-[15px] text-neutral-600 dark:text-neutral-300 flex items-center justify-center gap-2.5 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <Icon name={speaking ? 'stop' : 'speaker'} className="w-[18px] h-[18px]" />
              {speaking ? t.voice.stop : t.voice.listenAloud}
            </button>
          )}
        </div>

        <div className="px-7 pt-6 pb-7 space-y-4">
          <button
            onClick={onClose}
            className="w-full rounded-2xl bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 font-medium text-[15px] py-4 hover:opacity-90 transition-opacity"
          >
            {t.urge.dismiss}
          </button>
          <p className="text-center text-[12px] text-neutral-400 dark:text-neutral-600 leading-relaxed">
            {t.urge.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
