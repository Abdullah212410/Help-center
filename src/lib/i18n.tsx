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
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('lang');
    return (saved === 'ar-AR' ? 'ar-AR' : 'en-US');
  });

  const dir = locale === 'ar-AR' ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem('lang', locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

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

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);