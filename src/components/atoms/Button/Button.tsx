import cn from 'clsx';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  label: string;
  onClick: () => void;
  ariaLabel: string;
  icon?: ReactNode;
  isSecondary?: boolean;
  isDisable?: boolean;
  className?: string;
}

export const Button = ({
  label,
  onClick,
  ariaLabel,
  icon,
  isSecondary = false,
  isDisable = false,
  className
}: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={twMerge(
        'flex w-fit items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200 ease-in-out',
        cn({
          'bg-blue-800 text-white shadow-lg dark:bg-orange-700': !isSecondary,
          'hover:cursor-pointer hover:bg-blue-800/80 dark:hover:bg-orange-800/80':
            !isSecondary && !isDisable,

          'text-primary dark:text-white': isSecondary,
          'hover:text-accent dark:hover:text-accent-dark hover:cursor-pointer hover:bg-neutral-100 dark:hover:bg-white/15':
            isSecondary && !isDisable,

          'cursor-not-allowed': isDisable,
          'bg-primary/30 shadow-none dark:bg-white/15 dark:text-white/40':
            !isSecondary && isDisable,
          'text-primary/50 dark:text-white/40': isSecondary && isDisable
        }),
        className
      )}
      onClick={onClick}
    >
      {icon && <div>{icon}</div>}
      {label}
    </button>
  );
};
