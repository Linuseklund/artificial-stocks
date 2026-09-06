import type { Lang } from '../i18n/languages';

/**
 * Text-to-speech and speech recognition built on the browser's Web Speech API.
 * No backend, no API keys — everything runs locally in the user's browser.
 */

// Voices whose names we know to be female for the languages we support. The
// Web Speech API exposes no gender field, so name matching is the only signal.
const femaleVoiceNames = [
  // Swedish
  'alva', 'klara', 'ylva', 'hedvig', 'sofie', 'astrid', 'elin',
  // English
  'samantha', 'karen', 'moira', 'tessa', 'fiona', 'serena', 'ava', 'allison',
  'susan', 'zira', 'joanna', 'salli', 'kimberly', 'amy', 'emma', 'nicole',
];

const maleVoiceNames = [
  // Swedish
  'oskar', 'bengt', 'mattias', 'erik',
  // English
  'daniel', 'alex', 'fred', 'oliver', 'thomas', 'david', 'mark', 'aaron',
  'arthur', 'gordon', 'rishi', 'matthew', 'brian', 'russell',
];

function scoreVoice(voice: SpeechSynthesisVoice): number {
  const name = voice.name.toLowerCase();
  let score = 0;

  // "female" must be checked before "male" — the word contains it.
  if (/\bfemale\b/.test(name)) score += 80;
  else if (/\bmale\b/.test(name)) score -= 80;

  if (femaleVoiceNames.some((n) => name.includes(n))) score += 100;
  if (maleVoiceNames.some((n) => name.includes(n))) score -= 100;

  // Locally installed voices are more reliable and work offline.
  if (voice.localService) score += 10;
  if (voice.default) score += 5;

  return score;
}

export function listVoices(lang: Lang): SpeechSynthesisVoice[] {
  if (!speechSupported()) return [];
  const prefix = lang === 'sv' ? 'sv' : 'en';
  return window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith(prefix))
    .sort((a, b) => scoreVoice(b) - scoreVoice(a));
}

/**
 * Picks the warmest-sounding available voice: a female voice in the user's
 * language when one exists, otherwise the best language match.
 */
export function pickVoice(lang: Lang, preferredVoiceURI?: string): SpeechSynthesisVoice | null {
  const candidates = listVoices(lang);
  if (candidates.length === 0) return null;
  if (preferredVoiceURI) {
    const chosen = candidates.find((v) => v.voiceURI === preferredVoiceURI);
    if (chosen) return chosen;
  }
  return candidates[0];
}

export function speechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

/**
 * Voices load asynchronously in most browsers — getVoices() is empty until the
 * voiceschanged event fires. Resolves once at least one voice is available.
 */
export function waitForVoices(timeoutMs = 3000): Promise<void> {
  if (!speechSupported()) return Promise.resolve();
  if (window.speechSynthesis.getVoices().length > 0) return Promise.resolve();

  return new Promise((resolve) => {
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      window.speechSynthesis.removeEventListener('voiceschanged', done);
      resolve();
    };
    window.speechSynthesis.addEventListener('voiceschanged', done);
    setTimeout(done, timeoutMs);
  });
}

export interface SpeakOptions {
  lang: Lang;
  rate?: number;
  voiceURI?: string;
  onEnd?: () => void;
  onStart?: () => void;
}

/**
 * Speaks a line in a deliberately calm cadence: slower than default, with a
 * neutral pitch that keeps the voice warm rather than sing-song.
 */
export function speak(text: string, options: SpeakOptions) {
  if (!speechSupported() || !text.trim()) return;

  window.speechSynthesis.cancel();

  try {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = options.lang === 'sv' ? 'sv-SE' : 'en-US';
    utterance.rate = options.rate ?? 0.85;
    utterance.pitch = 1.05;
    utterance.volume = 1;

    const voice = pickVoice(options.lang, options.voiceURI);
    if (voice) utterance.voice = voice;

    if (options.onStart) utterance.onstart = options.onStart;
    if (options.onEnd) {
      utterance.onend = options.onEnd;
      utterance.onerror = options.onEnd;
    }

    window.speechSynthesis.speak(utterance);
  } catch {
    // Speech synthesis differs across browsers and can throw outright. Reset
    // the caller's state so the UI never gets stuck mid-utterance.
    options.onEnd?.();
  }
}

export function stopSpeaking() {
  if (!speechSupported()) return;
  window.speechSynthesis.cancel();
}

/* ------------------------------------------------------------------ */
/* Speech recognition                                                  */
/* ------------------------------------------------------------------ */

interface RecognitionResultLike {
  0: { transcript: string };
  isFinal: boolean;
}

interface RecognitionEventLike {
  results: { length: number; [index: number]: RecognitionResultLike };
}

interface RecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: RecognitionEventLike) => void) | null;
  onerror: ((event: { error?: string }) => void) | null;
  onend: (() => void) | null;
}

type RecognitionConstructor = new () => RecognitionLike;

function getRecognitionConstructor(): RecognitionConstructor | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as {
    SpeechRecognition?: RecognitionConstructor;
    webkitSpeechRecognition?: RecognitionConstructor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function recognitionSupported(): boolean {
  return getRecognitionConstructor() !== null;
}

export interface ListenHandlers {
  lang: Lang;
  onResult: (transcript: string) => void;
  onError?: (error: string) => void;
  onEnd?: () => void;
}

/**
 * Listens for a single spoken phrase and hands back the transcript.
 * Returns a stop function, or null when the browser has no recognition support.
 */
export function listenOnce(handlers: ListenHandlers): (() => void) | null {
  const Recognition = getRecognitionConstructor();
  if (!Recognition) return null;

  const recognition = new Recognition();
  recognition.lang = handlers.lang === 'sv' ? 'sv-SE' : 'en-US';
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const transcript = event.results[0]?.[0]?.transcript ?? '';
    if (transcript) handlers.onResult(transcript);
  };
  recognition.onerror = (event) => handlers.onError?.(event.error ?? 'unknown');
  recognition.onend = () => handlers.onEnd?.();

  try {
    recognition.start();
  } catch {
    handlers.onError?.('start-failed');
    return null;
  }

  return () => {
    try {
      recognition.abort();
    } catch {
      // Already stopped — nothing to clean up.
    }
  };
}
