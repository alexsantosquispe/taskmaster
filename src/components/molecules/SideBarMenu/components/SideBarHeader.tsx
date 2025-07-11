import cn from 'clsx';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { BoxIcon } from '../../../../icons/BoxIcon';
import { ToggleButton } from '../../../atoms/ToggleButton/ToggleButton';

interface SideBarHeaderProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const SideBarHeader = ({ isCollapsed, setIsCollapsed }: SideBarHeaderProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center justify-between p-2',
        cn({
          'flex-col-reverse gap-2': isCollapsed,
          'flex-row pl-4': !isCollapsed
        })
      )}
    >
      <div className={twMerge('flex items-center gap-x-2')}>
        <BoxIcon className="rounded bg-blue-700 p-[0.1875rem] text-white dark:bg-blue-500" />
        {!isCollapsed && (
          <h1>
            <strong className="font-semibold">Task</strong>Master
          </h1>
        )}
      </div>
      <ToggleButton isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    </div>
  );
};

export default memo(SideBarHeader);
