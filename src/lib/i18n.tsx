import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../i18n/en';
import { ar } from '../i18n/ar';

type Locale = 'en-US' | 'ar-AR';
type Dictionary = typeof en;
type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof Dictionary, params?: Record<string, string | number>) => string;
  dir: 'ltr' | 'rtl';
  lang: 'en' | 'ar';
  localize: (obj: any, field: string) => string;
};

const dictionaries: Record<Locale, Dictionary> = {
  'en-US': en,
  'ar-AR': ar,
};

const I18nContext = createContext<I18nContextType>({
  locale: 'en-US',
  setLocale: () => {},
  t: (key) => key as string,
  dir: 'ltr',
  lang: 'en',
  localize: (obj: any, field: string) => obj[field] || '',
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('lang');
    return (saved === 'ar-AR' ? 'ar-AR' : 'en-US');
  });

  const dir = locale === 'ar-AR' ? 'rtl' as const : 'ltr' as const;
  const lang = locale === 'ar-AR' ? 'ar' : 'en';

  useEffect(() => {
    localStorage.setItem('lang', locale);
    document.documentElement.lang = lang;
    document.documentElement.dir = 'ltr';
  }, [locale, lang, dir]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const t = (key: keyof Dictionary, params?: Record<string, string | number>) => {
    let text = dictionaries[locale][key] || key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }
    return text;
  };

  const localize = (obj: any, field: string): string => {
    if (locale === 'ar-AR') {
      const arValue = obj[`${field}_ar`];
      if (arValue) return arValue;
    }
    return obj[field] || '';
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir, lang, localize }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

/* ── Language-aware field selector ───────────────────────────────
   Prevents wrong-language display when _ar fields contain English
   or EN fields contain Arabic text.                              */

const ARABIC_RE = /[\u0600-\u06FF]/;

export function localizedField(
  lang: 'en' | 'ar',
  en: string,
  ar: string | null | undefined,
): string {
  if (lang === 'ar') {
    // Prefer AR field only if it actually contains Arabic characters
    if (ar && ARABIC_RE.test(ar)) return ar;
    return en || '';
  }
  // English mode
  if (en) {
    const sample = en.substring(0, 200);
    const arChars = (sample.match(/[\u0600-\u06FF]/g) || []).length;
    const enChars = (sample.match(/[a-zA-Z]/g) || []).length;
    // EN field is mainly Arabic — try AR field as fallback (might be English)
    if (arChars > enChars && ar && !ARABIC_RE.test(ar.substring(0, 200))) return ar;
    return en;
  }
  return ar || '';
}
