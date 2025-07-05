import { THEME_KEY } from '../constants';
import { Theme, type ThemeType } from '../contexts/ThemeContext';
import { getLSValue } from './localStorage.utils';

export const getSystemTheme = () => {
  if (typeof window === 'undefined') return Theme.light;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Theme.dark
    : Theme.light;
};

export const getStoredTheme = (): ThemeType | null => {
  const storedTheme = getLSValue(THEME_KEY);

  if (!storedTheme) return null;

  return storedTheme as ThemeType;
};

export const applyThemeToDocument = (theme: ThemeType) => {
  const root = window.document.documentElement;

  if (theme === Theme.dark) {
    root.classList.add(Theme.dark);
  } else {
    root.classList.remove(Theme.dark);
  }
};
