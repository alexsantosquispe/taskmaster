import { createContext } from 'react';

export const Theme = {
  light: 'light',
  dark: 'dark',
  system: 'system'
} as const;

export type ThemeType = keyof typeof Theme;

export type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
