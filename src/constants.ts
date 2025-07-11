import { PRIORITY_TYPES } from './models/types';

export const THEME_KEY = 'theme';

export const PRIORITY_COLORS = {
  [PRIORITY_TYPES.LOW]:
    'bg-amber-100 text-yellow-600 border border-yellow-600 dark:bg-yellow-600/30 dark:border-yellow-400 dark:text-yellow-400',
  [PRIORITY_TYPES.MEDIUM]:
    'bg-orange-100 text-amber-600 border border-amber-600 dark:bg-orange-600/20 dark:border-orange-400 dark:text-orange-400',
  [PRIORITY_TYPES.HIGH]:
    'bg-red-100 text-rose-500 border border-rose-500 dark:bg-red-600/20 dark:border-red-400 dark:text-red-400'
};
