export const languages = ['sv', 'en'] as const;

export type Lang = (typeof languages)[number];

export const languageLabels: Record<Lang, string> = {
  sv: 'Svenska',
  en: 'English',
};

export const defaultLang: Lang = 'sv';

export function detectLang(): Lang {
  if (typeof navigator === 'undefined') return defaultLang;
  const browser = navigator.language?.slice(0, 2).toLowerCase();
  return (languages as readonly string[]).includes(browser) ? (browser as Lang) : defaultLang;
}
