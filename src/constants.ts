import { PRIORITY_TYPES } from './models/types';

export const THEME_KEY = 'theme';

export const PRIORITY_COLORS = {
  [PRIORITY_TYPES.LOW]:
    'bg-amber-100 text-yellow-800 border border-yellow-800 dark:bg-yellow-600/30 dark:border-yellow-400 dark:text-yellow-400',
  [PRIORITY_TYPES.MEDIUM]:
    'bg-orange-100 text-amber-800 border border-amber-800 dark:bg-orange-600/20 dark:border-orange-400 dark:text-orange-400',
  [PRIORITY_TYPES.HIGH]:
    'bg-red-100 text-rose-700 border border-rose-700 dark:bg-red-600/20 dark:border-red-400 dark:text-red-400'
};

export const currentUser = {
  name: 'Alex Santos',
  email: 'alex.santos456@gmail.com',
  avatarUrl: '/img/avatar.webp'
};
