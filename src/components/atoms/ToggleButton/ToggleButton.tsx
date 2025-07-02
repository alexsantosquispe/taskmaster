import { CollapseIcon } from '../../../icons/CollapseIcon';
import { ExpandIcon } from '../../../icons/ExpandIcon';
import { useState } from 'react';

export const ToggleButton = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleButton = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <button
      className="hover:text-primary text-gray-400 hover:cursor-pointer"
      onClick={toggleButton}
    >
      {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
    </button>
  );
};
