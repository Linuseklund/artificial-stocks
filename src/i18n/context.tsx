import { createContext, useContext } from 'react';
import type { Lang } from './languages';
import { ui } from './ui';

interface I18nContextValue {
  lang: Lang;
  t: typeof ui.sv;
  setLang: (lang: Lang) => void;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nContext.Provider');
  return ctx;
}
