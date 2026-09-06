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

export const defaultLang: Lang = 'sv';

export function detectLang(): Lang {
  if (typeof navigator === 'undefined') return defaultLang;
  const browser = navigator.language?.slice(0, 2).toLowerCase();
  return (languages as readonly string[]).includes(browser) ? (browser as Lang) : defaultLang;
}
