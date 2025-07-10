import clsx from 'clsx';

export const formatDateToDayMonth = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short'
  };
  return new Intl.DateTimeFormat('en-GB', options).format(new Date(date));
};

export const getPercentageStyles = (percentage: number) => {
  return clsx({
    'stroke-green-700 dark:stroke-green-500 text-green-700 dark:text-green-500':
      percentage >= 70,
    'stroke-green-500 dark:stroke-green-400 text-green-500 dark:text-green-400':
      percentage >= 56 && percentage < 70,
    'stroke-amber-500 dark:stroke-amber-400 text-amber-500 dark:text-amber-400':
      percentage >= 1 && percentage < 56,
    'stroke-primary dark:stroke-white text-neutral-600 dark:text-white/80':
      percentage === 0
  });
};
