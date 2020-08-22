import React, { createContext, useState } from 'react';

export const LocaleContext = createContext(null);

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('ru');
  return (
    <LocaleContext.Provider value={[locale, setLocale]}>
      {children}
    </LocaleContext.Provider>
  );
};
