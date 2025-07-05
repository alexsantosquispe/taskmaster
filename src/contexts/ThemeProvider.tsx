import { useEffect, useState, type ReactNode } from 'react';
import { THEME_KEY } from '../constants';
import { setLSValue } from '../utils/localStorage.utils';
import {
  applyThemeToDocument,
  getStoredTheme,
  getSystemTheme
} from '../utils/theme.utils';
import { Theme, ThemeContext, type ThemeType } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const initialTheme = getStoredTheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(
    initialTheme ?? Theme.system
  );

  useEffect(() => {
    const theme =
      currentTheme === Theme.system ? getSystemTheme() : currentTheme;

    applyThemeToDocument(theme);
    setLSValue(THEME_KEY, currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        setTheme: setCurrentTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
