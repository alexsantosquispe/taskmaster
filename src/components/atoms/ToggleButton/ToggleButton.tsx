import type { ReactNode } from 'react';

interface ToggleButtonProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  expandIcon: ReactNode;
  collapseIcon: ReactNode;
}

export const ToggleButton = ({
  isCollapsed,
  setIsCollapsed,
  expandIcon,
  collapseIcon
}: ToggleButtonProps) => {
  const toggleButton = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <button
      aria-label={isCollapsed ? 'Expand menu' : 'Collapse menu'}
      className="rounded-lg p-2 text-neutral-600 hover:cursor-pointer hover:bg-neutral-100 hover:text-blue-700 dark:text-white/60 dark:hover:bg-neutral-800 dark:hover:text-orange-500"
      onClick={toggleButton}
    >
      {isCollapsed ? expandIcon : collapseIcon}
    </button>
  );
};
