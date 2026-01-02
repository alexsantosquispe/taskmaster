import { THEME_TYPES, type ThemeType } from '@alexsantosquispe/use-theme-hook';
import { THEME_KEY } from '../constants';
import { getLSValue } from './localStorage.utils';

export const getSystemTheme = () => {
  if (typeof window === 'undefined') return THEME_TYPES.LIGHT;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEME_TYPES.DARK
    : THEME_TYPES.LIGHT;
};

export const getStoredTheme = (): ThemeType | null => {
  const storedTheme = getLSValue(THEME_KEY);

  if (!storedTheme) return null;

  return storedTheme as ThemeType;
};

export const applyThemeToDocument = (theme: ThemeType) => {
  const root = window.document.documentElement;

  if (theme === THEME_TYPES.DARK) {
    root.classList.add(THEME_TYPES.DARK);
  } else {
    root.classList.remove(THEME_TYPES.DARK);
  }
};
