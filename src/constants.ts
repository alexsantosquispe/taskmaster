import { PRIORITY_TYPES, type Option } from './models/types';

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

export const COLORS: Option[] = [
  { value: '#0ea5e9', label: 'bg-sky-500' },
  { value: '#2563eb', label: 'bg-blue-600' },
  { value: '#8b5cf6', label: 'bg-violet-500' },
  { value: '#a855f7', label: 'bg-purple-500' },
  { value: '#d946ef', label: 'bg-fuchsia-500' },
  { value: '#e11d48', label: 'bg-rose-600' },
  { value: '#f97316', label: 'bg-orange-500' },
  { value: '#f59e0b', label: 'bg-amber-500' },
  { value: '#eab308', label: 'bg-yellow-500' },
  { value: '#a3e635', label: 'bg-lime-400' },
  { value: '#22c55e', label: 'bg-green-500' },
  { value: '#059669', label: 'bg-emerald-600' }
];

export const DEFAULT_COLOR = COLORS[1];

export const PROJECT_MENU_OPTIONS: Option[] = [
  { label: 'Edit', value: 'edit' },
  { label: 'Delete', value: 'delete' }
];
