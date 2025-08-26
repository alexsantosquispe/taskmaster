import cn from 'clsx';
import { useState, type MouseEvent, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps {
  ariaLabel: string;
  icon: ReactNode;
  onClick: () => void;
  isDisable?: boolean;
  tooltipMessage?: string;
  tooltipAlignment?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const IconButton = ({
  ariaLabel,
  onClick,
  icon,
  isDisable = false,
  tooltipMessage,
  tooltipAlignment = 'top',
  className
}: IconButtonProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowTooltip(false);
    onClick();
  };

  return (
    <div
      className="relative flex items-center justify-center"
      data-testid="icon-button"
    >
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={onClickHandler}
        disabled={isDisable}
        className={twMerge(
          'text-primary flex w-fit items-center justify-center rounded-lg p-2 transition-colors duration-150 ease-in-out dark:text-white/70',
          cn({
            'hover:text-accent dark:hover:text-accent-dark hover:cursor-pointer hover:bg-neutral-100 dark:hover:bg-white/15':
              !isDisable,
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
      {tooltipMessage && showTooltip && (
        <span
          className={twMerge(
            'bg-primary dark:text-primary absolute rounded-md px-1.5 py-0.5 text-sm whitespace-nowrap text-white shadow-lg dark:bg-white',
            cn({
              'bottom-full mb-1.5': tooltipAlignment === 'top',
              'left-full ml-1.5': tooltipAlignment === 'right',
              'top-full mt-1.5': tooltipAlignment === 'bottom',
              'right-full mr-1.5': tooltipAlignment === 'left'
            }),
            cn({
              'opacity-100': showTooltip,
              'opacity-0': !showTooltip
            })
          )}
        >
          {tooltipMessage}
        </span>
      )}
    </div>
  );
};
