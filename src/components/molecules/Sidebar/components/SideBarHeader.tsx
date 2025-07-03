import cn from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BoxIcon } from '../../../../icons/BoxIcon';
import { ToggleButton } from '../../../atoms/ToggleButton/ToggleButton';

interface SideBarHeaderProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export const SideBarHeader = ({
  isCollapsed,
  setIsCollapsed
}: SideBarHeaderProps) => {
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
        <BoxIcon className="rounded bg-blue-600 p-[0.1875rem] text-white" />
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
