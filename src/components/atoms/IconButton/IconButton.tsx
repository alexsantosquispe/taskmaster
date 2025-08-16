import cn from 'clsx';
import { useState, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps {
  ariaLabel: string;
  icon: ReactNode;
  onClick: () => void;
  isDisable?: boolean;
  tooltipMessage?: string;
}

export const IconButton = ({
  ariaLabel,
  onClick,
  icon,
  isDisable = false,
  tooltipMessage
}: IconButtonProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      <button
        aria-label={ariaLabel}
        onClick={onClick}
        disabled={isDisable}
        className="text-primary hover:text-accent dark:hover:text-accent-dark flex w-fit items-center justify-center rounded-lg p-2 transition-colors duration-150 ease-in-out hover:cursor-pointer hover:bg-neutral-100 dark:text-white/70 dark:hover:bg-white/15"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {icon}
      </button>
      {tooltipMessage && showTooltip && (
        <span
          className={twMerge(
            'bg-primary dark:text-primary absolute bottom-full mb-1.5 rounded-md px-2 py-1 text-sm whitespace-nowrap text-white shadow-lg dark:bg-white/80',
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
