import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../i18n/context';
import type { VoiceSettings } from '../types';
import Icon from './Icon';
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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-neutral-950/30 dark:bg-black/60 backdrop-blur-md px-4 py-6">
      <div className="w-full max-w-sm bg-white dark:bg-neutral-950 rounded-3xl max-h-[92vh] overflow-y-auto ring-1 ring-neutral-900/5 dark:ring-white/10">
        <div className="px-7 pt-9 pb-6 text-center">
          <h2 className="font-serif text-[30px] leading-[1.1] text-neutral-900 dark:text-neutral-50">
            {t.voice.title}
          </h2>
          <p className="text-[15px] text-neutral-400 dark:text-neutral-500 mt-2 leading-relaxed">
            {t.voice.subtitle}
          </p>
        </div>

        <div className="px-7 flex flex-col items-center">
          <button
            onClick={busy ? stopEverything : startListening}
            disabled={!canListen && status === 'idle'}
            aria-label={busy ? t.voice.stop : t.voice.listenButton}
            className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-colors disabled:opacity-30 ${
              status === 'speaking'
                ? 'bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100'
                : 'bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 hover:opacity-90'
            }`}
          >
            {busy && (
              <span className="absolute inset-0 rounded-full bg-neutral-900/10 dark:bg-white/10 animate-ping" />
            )}
            <Icon name={status === 'speaking' ? 'waveform' : 'mic'} className="relative w-7 h-7" />
          </button>

          <p className="text-[13px] text-neutral-400 dark:text-neutral-500 mt-4 text-center min-h-5">
            {status === 'listening'
              ? t.voice.listening
              : status === 'speaking'
                ? t.voice.speaking
                : canListen
                  ? t.voice.listenButton
                  : t.voice.micUnsupported}
          </p>

          {micError && (
            <p className="text-[12px] text-amber-600 dark:text-amber-500 mt-1 text-center leading-relaxed">
              {micError === 'denied' ? t.voice.micDenied : t.voice.micFailed}
            </p>
          )}
        </div>

        <div className="px-7 pt-6 space-y-5">
          {transcript && (
            <div>
              <p className="text-[13px] text-neutral-400 dark:text-neutral-500 mb-1">
                {t.voice.youSaid}
              </p>
              <p className="text-[15px] text-neutral-900 dark:text-neutral-100">{transcript}</p>
            </div>
          )}

          {reply && (
            <div className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4">
              <p className="text-[15px] text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {reply}
              </p>
              {canSpeak && (
                <button
                  onClick={() => say(reply)}
                  className="mt-2.5 text-[13px] text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                >
                  {t.voice.repeat}
                </button>
              )}
            </div>
          )}

          <div>
            <p className="text-[13px] text-neutral-400 dark:text-neutral-500 mb-2.5">
              {t.voice.moodPrompt}
            </p>
            <div className="flex flex-wrap gap-2">
              {moodOrder.map((intent) => (
                <button
                  key={intent}
                  onClick={() => pickMood(intent)}
                  className="rounded-full bg-neutral-100 dark:bg-neutral-900 px-3.5 py-2 text-[14px] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                >
                  {t.voice.moods[intent]}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => say(calmingSession[lang])}
            className="w-full py-4 text-[15px] text-neutral-600 dark:text-neutral-300 border-t border-neutral-100 dark:border-neutral-900 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            {t.voice.calmingSession}
          </button>

          {!canSpeak && (
            <p className="text-[12px] text-neutral-400 dark:text-neutral-600 text-center leading-relaxed">
              {speechAvailable ? t.voice.speechMuted : t.voice.speechUnsupported}
            </p>
          )}
        </div>

        <div className="px-7 pt-2 pb-7">
          <button
            onClick={() => {
              stopEverything();
              onClose();
            }}
            className="w-full rounded-2xl bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 font-medium text-[15px] py-4 hover:opacity-90 transition-opacity"
          >
            {t.voice.close}
          </button>
        </div>
      </div>
    </div>
  );
}
