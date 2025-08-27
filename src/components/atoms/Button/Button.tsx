import { LoadingIcon } from '@/icons';
import cn from 'clsx';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  ariaLabel: string;
  type?: 'submit' | 'button';
  icon?: ReactNode;
  isSecondary?: boolean;
  isDisable?: boolean;
  isLoading?: boolean;
  className?: string;
}

export const Button = ({
  label = '',
  onClick,
  ariaLabel,
  type = 'button',
  icon,
  isSecondary = false,
  isDisable = false,
  isLoading = false,
  className
}: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={twMerge(
        'flex w-fit items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200 ease-in-out',
        cn({
          'bg-blue-800 text-white shadow-lg dark:bg-orange-700':
            !isSecondary && !isLoading,
          'hover:cursor-pointer hover:bg-blue-800/80 dark:hover:bg-orange-800/80':
            !isSecondary && !isDisable && !isLoading,
          'text-primary dark:text-white': isSecondary,
          'hover:text-accent dark:hover:text-accent-dark hover:cursor-pointer hover:bg-neutral-100 dark:hover:bg-white/15':
            isSecondary && !isDisable && !isLoading,
          'cursor-not-allowed': isDisable || isLoading,
          'bg-primary/40 shadow-none dark:bg-white/15 dark:text-white/40':
            !isSecondary && (isDisable || isLoading),
          'text-primary/50 dark:text-white/40':
            isSecondary && (isDisable || isLoading)
        }),
        className
      )}
      onClick={onClick}
      type={type}
      disabled={isDisable || isLoading}
    >
      {isLoading && (
        <div>
          <LoadingIcon />
        </div>
      )}
      {icon && <div>{icon}</div>}
      {isLoading ? 'Loading...' : label}
    </button>
  );
};
