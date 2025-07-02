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
      className="text-primary/60 rounded-lg p-2 hover:cursor-pointer hover:bg-blue-50 hover:text-blue-600"
      onClick={toggleButton}
    >
      {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
    </button>
  );
};
