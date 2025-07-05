import { CollapseIcon } from '../../../icons/CollapseIcon';
import { ExpandIcon } from '../../../icons/ExpandIcon';

interface ToggleButtonProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export const ToggleButton = ({
  isCollapsed,
  setIsCollapsed
}: ToggleButtonProps) => {
  const toggleButton = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <button
      className="rounded-lg p-2 text-neutral-600 hover:cursor-pointer hover:bg-neutral-100 hover:text-blue-700 dark:text-white/60 dark:hover:bg-neutral-800 dark:hover:text-blue-500"
      onClick={toggleButton}
    >
      {isCollapsed ? <ExpandIcon /> : <CollapseIcon />}
    </button>
  );
};
