import React, { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import dark from 'styles/themes/dark';
import light from 'styles/themes/light';
import { useSessionStorageState } from 'hooks/useSessionStorageState';

const themes = { dark, light };

export const ThemeContext = createContext(null);

const useDefaultTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }
  return 'light';
};

export const ThemeProvider = ({ children }) => {
  const defaultTheme = useDefaultTheme();
  const [themeName, setThemeName] = useSessionStorageState(
    defaultTheme,
    'theme'
  );
  const theme = themes[themeName];
  const toggleTheme = () => {
    if (themeName === 'dark') {
      setThemeName('light');
    } else {
      setThemeName('dark');
    }
  };

  return (
    <ThemeContext.Provider value={[themeName, toggleTheme]}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
