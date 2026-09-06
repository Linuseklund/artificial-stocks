import type { Lang } from './i18n/languages';

export interface StepProgress {
  started: boolean;
  completed: boolean;
  notes: string;
}

export interface NotificationSettings {
  enabled: boolean;
  morningTime: string; // "HH:MM"
  eveningTime: string; // "HH:MM"
}

export interface VoiceSettings {
  enabled: boolean;
  rate: number; // speech rate, 0.7 (slowest) – 1.0 (normal)
  voiceURI: string; // '' means auto-pick the warmest available voice
  autoSpeakUrge: boolean; // read the craving advice aloud automatically
}

export interface AppState {
  soberSince: string | null; // ISO date string
  name: string;
  lang: Lang;
  steps: Record<number, StepProgress>;
  notifications: NotificationSettings;
  voice: VoiceSettings;
  lastCheckIn: {
    morningDate: string | null; // yyyy-mm-dd of last shown morning notification
    eveningDate: string | null; // yyyy-mm-dd of last shown evening notification
  };
}
