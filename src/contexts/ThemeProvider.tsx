import { useState, type ReactNode } from 'react';
import { Theme, ThemeContext, type ThemeType } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(Theme.system);

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
