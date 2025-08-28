import '@testing-library/jest-dom';

import { ALIGNMENT_TYPES, type AlignmentType } from '@/models/types';
import cn from 'clsx';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { TooltipWrapper } from '../TooltipWrapper/TooltipWrapper';

interface IconButtonProps {
  ariaLabel: string;
  icon: ReactNode;
  onClick: () => void;
  isDisable?: boolean;
  isDefault?: boolean;
  tooltipMessage?: string;
  tooltipAlignment?: AlignmentType;
  className?: string;
}

export const IconButton = ({
  ariaLabel,
  onClick,
  icon,
  isDisable = false,
  isDefault = true,
  tooltipMessage = '',
  tooltipAlignment = ALIGNMENT_TYPES.TOP,
  className
}: IconButtonProps) => {
  return (
    <TooltipWrapper
      tooltipMessage={tooltipMessage}
      tooltipAlignment={tooltipAlignment}
      componentToRender={(setShowTooltip) => {
        return (
          <button
            type="button"
            aria-label={ariaLabel}
            onClick={() => {
              onClick();
              setShowTooltip(false);
            }}
            disabled={isDisable}
            className={twMerge(
              'text-primary/80 flex w-fit items-center justify-center rounded-lg p-2 transition-colors duration-150 ease-in-out dark:text-white/70',
              cn({
                'hover:text-accent dark:hover:text-accent-dark hover:cursor-pointer hover:bg-neutral-100 dark:hover:bg-white/15':
                  !isDisable && isDefault,
                'hover:text-primary hover:cursor-pointer hover:bg-neutral-100 dark:hover:bg-white/15 dark:hover:text-white':
                  !isDisable && !isDefault,
                'cursor-not-allowed bg-neutral-100 opacity-75 dark:bg-neutral-600':
                  isDisable
              }),
              className
            )}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {icon}
          </button>
        );
      }}
    />
  );
};
