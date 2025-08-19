import clsx from 'clsx';
import { PRIORITY_COLORS } from '../constants';
import { type PriorityType } from '../models/types';

export const getPercentageStyles = (percentage: number) => {
  return clsx({
    'stroke-green-700 dark:stroke-green-500 text-green-700 dark:text-green-500':
      percentage >= 70,
    'stroke-green-600 dark:stroke-green-400 text-green-600 dark:text-green-400':
      percentage >= 56 && percentage < 70,
    'stroke-amber-600 dark:stroke-amber-400 text-amber-700 dark:text-amber-400':
      percentage >= 1 && percentage < 56,
    'stroke-primary dark:stroke-white text-neutral-600 dark:text-white/80':
      percentage === 0
  });
};

export const getPriorityStyles = (priority: PriorityType) => {
  return PRIORITY_COLORS[priority];
};
