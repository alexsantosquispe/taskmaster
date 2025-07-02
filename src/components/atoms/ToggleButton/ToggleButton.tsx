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
      className="text-primary/60 rounded-lg p-2 hover:cursor-pointer hover:bg-blue-50 hover:text-blue-600"
      onClick={toggleButton}
    >
      {isCollapsed ? <ExpandIcon /> : <CollapseIcon />}
    </button>
  );
};
