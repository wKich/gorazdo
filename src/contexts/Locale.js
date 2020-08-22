import React, { createContext } from 'react';
import { useSessionStorageState } from 'hooks/useSessionStorageState';

export const FALLBACK_LOCALE = 'en';
export const AVAILABLE_LOCALES = ['en', 'ru'];

export const LocaleContext = createContext(null);

const useNavigatorLocale = () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const [tag, subtag] = window.navigator.language.split('-');
    if (AVAILABLE_LOCALES.includes(tag)) {
      return tag;
    }
    return FALLBACK_LOCALE;
  } catch {
    return FALLBACK_LOCALE;
  }
};

export const LocaleProvider = ({ children }) => {
  const defaultLocale = useNavigatorLocale();
  const [locale, setLocale] = useSessionStorageState(defaultLocale, 'locale');
  return (
    <LocaleContext.Provider value={[locale, setLocale]}>
      {children}
    </LocaleContext.Provider>
  );
};
