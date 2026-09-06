export const languages = ['sv', 'en', 'de', 'fr', 'es', 'it'] as const;

export type Lang = (typeof languages)[number];

export const languageLabels: Record<Lang, string> = {
  sv: 'Svenska',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
};

/** BCP 47 tags used for speech synthesis and recognition. */
export const speechLocales: Record<Lang, string> = {
  sv: 'sv-SE',
  en: 'en-US',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  it: 'it-IT',
};

/**
 * The app opens in English for everyone, regardless of browser locale. The
 * language picker sits at the top of Settings, and the choice is remembered
 * from then on.
 */
export const defaultLang: Lang = 'en';
