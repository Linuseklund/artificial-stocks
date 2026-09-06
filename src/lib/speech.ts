import type { Lang } from '../i18n/languages';
import { speechLocales } from '../i18n/languages';

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
  // German
  'anna', 'petra', 'marlene', 'vicki', 'katja', 'hedda', 'steffi',
  // French
  'amélie', 'amelie', 'audrey', 'aurelie', 'aurélie', 'céline', 'celine',
  'chantal', 'léa', 'lea', 'julie', 'virginie', 'hortense',
  // Spanish
  'mónica', 'monica', 'paulina', 'marisol', 'lucia', 'lucía', 'conchita',
  'penélope', 'penelope', 'sabina', 'helena', 'laura',
  // Italian
  'alice', 'federica', 'paola', 'elsa', 'carla', 'bianca', 'isabella',
];

const maleVoiceNames = [
  // Swedish
  'oskar', 'bengt', 'mattias', 'erik',
  // English
  'daniel', 'alex', 'fred', 'oliver', 'thomas', 'david', 'mark', 'aaron',
  'arthur', 'gordon', 'rishi', 'matthew', 'brian', 'russell',
  // German
  'yannick', 'hans', 'stefan', 'markus', 'conrad', 'martin', 'klaus',
  // French
  'nicolas', 'mathieu', 'henri', 'rémi', 'remi', 'paul',
  // Spanish
  'jorge', 'diego', 'enrique', 'carlos', 'juan', 'miguel', 'pablo',
  // Italian
  'luca', 'cosimo', 'giorgio', 'marco', 'paolo',
];

/**
 * Splits a voice name into whole words. Matching names as substrings is unsafe:
 * "Alva (Premium)" contains "remi", which would score the warmest voice on the
 * system as male and rank it last.
 */
function wordsIn(name: string): Set<string> {
  return new Set(name.toLowerCase().split(/[^\p{L}]+/u).filter(Boolean));
}

function scoreVoice(voice: SpeechSynthesisVoice): number {
  const words = wordsIn(voice.name);
  let score = 0;

  // "female" must be checked before "male" — the word contains it.
  if (words.has('female')) score += 80;
  else if (words.has('male')) score -= 80;

  if (femaleVoiceNames.some((n) => words.has(n))) score += 100;
  if (maleVoiceNames.some((n) => words.has(n))) score -= 100;

  /*
   * Platforms ship several quality tiers of the same voice and name them:
   * Apple has Enhanced and Premium, Microsoft has Natural, Google has WaveNet
   * and Neural. Those sound markedly more human than the small default voices,
   * which Apple labels Compact. Weighted below the gender signal on purpose —
   * a warm-sounding voice of the wrong gender is not the trade we want.
   */
  const tiers = ['premium', 'enhanced', 'neural', 'natural', 'wavenet', 'siri'];
  if (tiers.some((tier) => words.has(tier))) score += 60;
  if (words.has('compact')) score -= 25;

  // Locally installed voices are more reliable and work offline.
  if (voice.localService) score += 10;
  if (voice.default) score += 5;

  return score;
}

export function listVoices(lang: Lang): SpeechSynthesisVoice[] {
  if (!speechSupported()) return [];
  return window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith(lang))
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

/** Longest line we will speak without pausing for breath, in characters. */
const breathLimit = 90;
/** Shortest fragment a split may leave behind, so we never bark two words. */
const breathFloor = 12;

/**
 * Breaks one long sentence at the comma nearest its middle, then keeps going
 * until every piece fits in a breath. Splitting at the *last* comma before a
 * fixed point tends to leave one long half and one short one; the middle keeps
 * the halves even, which is how a person actually phrases a long sentence.
 */
function splitSentence(sentence: string): string[] {
  if (sentence.length <= breathLimit) return [sentence];

  const middle = sentence.length / 2;
  let pivot = -1;
  for (let i = sentence.indexOf(', '); i !== -1; i = sentence.indexOf(', ', i + 1)) {
    if (i < breathFloor || sentence.length - i < breathFloor) continue;
    if (pivot === -1 || Math.abs(i - middle) < Math.abs(pivot - middle)) pivot = i;
  }
  if (pivot === -1) return [sentence];

  return [
    ...splitSentence(sentence.slice(0, pivot + 1)),
    ...splitSentence(sentence.slice(pivot + 2)),
  ];
}

/**
 * Splits a passage into the units a person would speak between breaths:
 * sentences first, then any sentence too long to say in one.
 */
function intoBreaths(text: string): string[] {
  return text
    .split(/(?<=[.!?…])\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .flatMap(splitSentence);
}

/**
 * Invalidates any in-flight sequence. Incremented by every new speak() and by
 * stopSpeaking(), so a chain that is mid-pause knows to abandon itself.
 */
let sequenceToken = 0;

/**
 * Speaks a passage in a deliberately calm cadence.
 *
 * The Web Speech API gives us only rate, pitch and volume — no SSML — so the
 * warmth has to come from pacing. Rather than handing the engine one long
 * block, which it reads at a flat unbroken clip, we speak it breath by breath
 * with real silences in between, and let rate and pitch drift very slightly
 * from line to line. Uniformity is most of what makes synthesis sound machine-
 * like, and these two together do more for the tone than any single setting.
 */
export function speak(text: string, options: SpeakOptions) {
  if (!speechSupported() || !text.trim()) return;

  window.speechSynthesis.cancel();
  const token = ++sequenceToken;

  const breaths = intoBreaths(text);
  const baseRate = options.rate ?? 0.85;
  const voice = pickVoice(options.lang, options.voiceURI);
  let started = false;

  const speakBreath = (index: number) => {
    if (token !== sequenceToken) return;
    if (index >= breaths.length) {
      options.onEnd?.();
      return;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(breaths[index]);
      utterance.lang = speechLocales[options.lang];
      // A touch under 1 sits warmer and more grounded than a raised pitch,
      // which reads as bright and tense.
      utterance.pitch = 0.94 + (index % 3) * 0.02;
      utterance.rate = baseRate - (index % 2) * 0.015;
      utterance.volume = 1;
      if (voice) utterance.voice = voice;

      utterance.onstart = () => {
        if (started || token !== sequenceToken) return;
        started = true;
        options.onStart?.();
      };

      // Some engines fire onerror and onend for the same utterance, which would
      // advance the chain twice and speak a line out of order.
      let advanced = false;
      const next = () => {
        if (advanced || token !== sequenceToken) return;
        advanced = true;
        // A breath's worth of silence, a little longer after a full stop.
        const pause = /[.!?…]$/.test(breaths[index]) ? 420 : 260;
        setTimeout(() => speakBreath(index + 1), pause);
      };
      utterance.onend = next;
      utterance.onerror = next;

      window.speechSynthesis.speak(utterance);
    } catch {
      // Speech synthesis differs across browsers and can throw outright. Reset
      // the caller's state so the UI never gets stuck mid-utterance.
      options.onEnd?.();
    }
  };

  speakBreath(0);
}

export function stopSpeaking() {
  sequenceToken++;
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
  recognition.lang = speechLocales[handlers.lang];
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
