import type { ReactNode } from 'react';
import { IconButton } from '../IconButton/IconButton';

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
    <IconButton
      ariaLabel={isCollapsed ? 'Expand menu' : 'Collapse menu'}
      icon={isCollapsed ? expandIcon : collapseIcon}
      onClick={toggleButton}
      tooltipMessage={isCollapsed ? 'Expand' : 'Collapse'}
      className="text-neutral-600"
      tooltipAlignment="right"
    />
  );
};
