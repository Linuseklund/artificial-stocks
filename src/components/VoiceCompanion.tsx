import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../i18n/context';
import type { VoiceSettings } from '../types';
import {
  listenOnce,
  recognitionSupported,
  speak,
  speechSupported,
  stopSpeaking,
  waitForVoices,
} from '../lib/speech';
import {
  calmingSession,
  matchIntent,
  replyFor,
  voiceGreetings,
  type Intent,
} from '../data/voiceScripts';

interface Props {
  voice: VoiceSettings;
  onClose: () => void;
}

type Status = 'idle' | 'listening' | 'speaking';

const moodOrder: Intent[] = [
  'craving',
  'stress',
  'lonely',
  'sad',
  'angry',
  'social',
  'tired',
  'celebrating',
  'relapse',
];

export default function VoiceCompanion({ voice, onClose }: Props) {
  const { t, lang } = useI18n();
  const [status, setStatus] = useState<Status>('idle');
  const [transcript, setTranscript] = useState('');
  const [reply, setReply] = useState('');
  const [micError, setMicError] = useState<string | null>(null);
  const stopListeningRef = useRef<(() => void) | null>(null);
  const lastReplyRef = useRef<string | undefined>(undefined);

  const speechAvailable = speechSupported();
  const canSpeak = speechAvailable && voice.enabled;
  const canListen = recognitionSupported();

  const say = (text: string) => {
    setReply(text);
    lastReplyRef.current = text;
    if (!canSpeak) return;
    speak(text, {
      lang,
      rate: voice.rate,
      voiceURI: voice.voiceURI || undefined,
      onStart: () => setStatus('speaking'),
      onEnd: () => setStatus('idle'),
    });
  };

  // Greet once when the companion opens. The text shows immediately; only the
  // spoken half waits for the browser to finish loading its voices.
  useEffect(() => {
    let cancelled = false;
    const greeting = voiceGreetings[lang][Math.floor(Math.random() * voiceGreetings[lang].length)];
    setReply(greeting);
    lastReplyRef.current = greeting;

    void waitForVoices().then(() => {
      if (cancelled || !canSpeak) return;
      speak(greeting, {
        lang,
        rate: voice.rate,
        voiceURI: voice.voiceURI || undefined,
        onStart: () => setStatus('speaking'),
        onEnd: () => setStatus('idle'),
      });
    });
    return () => {
      cancelled = true;
      stopSpeaking();
      stopListeningRef.current?.();
    };
    // Greeting is intentionally spoken only on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function respondTo(text: string) {
    const intent = matchIntent(text, lang);
    say(replyFor(intent, lang, lastReplyRef.current));
  }

  function startListening() {
    stopSpeaking();
    setMicError(null);
    setTranscript('');
    setStatus('listening');

    const stop = listenOnce({
      lang,
      onResult: (heard) => {
        setTranscript(heard);
        respondTo(heard);
      },
      onError: (error) => {
        setStatus('idle');
        setMicError(error === 'not-allowed' || error === 'service-not-allowed' ? 'denied' : 'failed');
      },
      onEnd: () => setStatus((prev) => (prev === 'listening' ? 'idle' : prev)),
    });

    if (!stop) {
      setStatus('idle');
      setMicError('failed');
      return;
    }
    stopListeningRef.current = stop;
  }

  function stopEverything() {
    stopListeningRef.current?.();
    stopSpeaking();
    setStatus('idle');
  }

  function pickMood(intent: Intent) {
    setTranscript(t.voice.moods[intent]);
    say(replyFor(intent, lang, lastReplyRef.current));
  }

  const busy = status !== 'idle';

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-6">
      <div className="w-full max-w-sm bg-white dark:bg-neutral-900 rounded-3xl shadow-xl max-h-[92vh] overflow-y-auto">
        <div className="px-6 pt-7 pb-3 text-center">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
            {t.voice.title}
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 leading-relaxed">
            {t.voice.subtitle}
          </p>
        </div>

        <div className="px-6 flex flex-col items-center">
          <button
            onClick={busy ? stopEverything : startListening}
            disabled={!canListen && status === 'idle'}
            aria-label={busy ? t.voice.stop : t.voice.listenButton}
            className={`relative w-28 h-28 rounded-full flex items-center justify-center transition-colors disabled:opacity-40 ${
              status === 'listening'
                ? 'bg-emerald-600 text-white'
                : status === 'speaking'
                  ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            {busy && (
              <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
            )}
            <span className="relative text-3xl">
              {status === 'listening' ? '🎙️' : status === 'speaking' ? '🔊' : '🎤'}
            </span>
          </button>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-3 text-center min-h-5">
            {status === 'listening'
              ? t.voice.listening
              : status === 'speaking'
                ? t.voice.speaking
                : canListen
                  ? t.voice.listenButton
                  : t.voice.micUnsupported}
          </p>

          {micError && (
            <p className="text-xs text-red-600 dark:text-red-400 mt-1 text-center">
              {micError === 'denied' ? t.voice.micDenied : t.voice.micFailed}
            </p>
          )}
        </div>

        <div className="px-6 py-4 space-y-3">
          {transcript && (
            <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 px-4 py-3">
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">
                {t.voice.youSaid}
              </p>
              <p className="text-sm text-neutral-900 dark:text-neutral-100">{transcript}</p>
            </div>
          )}

          {reply && (
            <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 px-4 py-3">
              <p className="text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed">{reply}</p>
              {canSpeak && (
                <button
                  onClick={() => say(reply)}
                  className="mt-2 text-xs font-medium text-emerald-700 dark:text-emerald-400 underline underline-offset-2"
                >
                  {t.voice.repeat}
                </button>
              )}
            </div>
          )}

          <div>
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
              {t.voice.moodPrompt}
            </p>
            <div className="flex flex-wrap gap-2">
              {moodOrder.map((intent) => (
                <button
                  key={intent}
                  onClick={() => pickMood(intent)}
                  className="rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300 hover:border-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  {t.voice.moods[intent]}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => say(calmingSession[lang])}
            className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium py-3"
          >
            {t.voice.calmingSession}
          </button>

          {!canSpeak && (
            <p className="text-xs text-neutral-400 text-center leading-relaxed">
              {speechAvailable ? t.voice.speechMuted : t.voice.speechUnsupported}
            </p>
          )}
        </div>

        <div className="px-6 pb-6 pt-1">
          <button
            onClick={() => {
              stopEverything();
              onClose();
            }}
            className="w-full rounded-xl bg-neutral-900 dark:bg-emerald-600 text-white font-medium text-base py-3.5 hover:bg-neutral-800 dark:hover:bg-emerald-500 transition-colors"
          >
            {t.voice.close}
          </button>
        </div>
      </div>
    </div>
  );
}
