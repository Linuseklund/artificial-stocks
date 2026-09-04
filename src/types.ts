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

export interface AppState {
  soberSince: string | null; // ISO date string
  name: string;
  lang: Lang;
  steps: Record<number, StepProgress>;
  notifications: NotificationSettings;
  lastCheckIn: {
    morningDate: string | null; // yyyy-mm-dd of last shown morning notification
    eveningDate: string | null; // yyyy-mm-dd of last shown evening notification
  };
}
