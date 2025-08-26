import { ALIGNMENT_TYPES, type AlignmentType } from '@/models/types';
import cn from 'clsx';
import { useState, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TooltipWrapperProps {
  tooltipMessage: string;
  tooltipAlignment?: AlignmentType;
  componentToRender?: (
    setShowTooltipCallback: (value: boolean) => void
  ) => ReactNode;
  children?: ReactNode;
  className?: {
    container?: string;
    tooltip?: string;
  };
}

export const TooltipWrapper = ({
  tooltipMessage,
  tooltipAlignment = ALIGNMENT_TYPES.TOP,
  componentToRender,
  children,
  className
}: TooltipWrapperProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      data-testid="tooltip-wrapper"
    >
      {children && (
        <div
          className={twMerge('block', className?.container)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {children}
        </div>
      )}
      {componentToRender && componentToRender(setShowTooltip)}
      {tooltipMessage && showTooltip && (
        <span
          className={twMerge(
            'dark:bg-primary text-primary absolute rounded-md border border-neutral-200 bg-white px-2 py-1 text-[0.8125rem] font-semibold whitespace-nowrap shadow-lg dark:border-white/20 dark:text-white',
            cn({
              'opacity-100': showTooltip,
              'opacity-0': !showTooltip
            }),
            cn({
              'bottom-full mb-1.5': tooltipAlignment === ALIGNMENT_TYPES.TOP,
              'left-full ml-1.5': tooltipAlignment === ALIGNMENT_TYPES.RIGHT,
              'top-full mt-1.5': tooltipAlignment === ALIGNMENT_TYPES.BOTTOM,
              'right-full mr-1.5': tooltipAlignment === ALIGNMENT_TYPES.LEFT
            }),
            className?.tooltip
          )}
        >
          {tooltipMessage}
        </span>
      )}
    </div>
  );
};
