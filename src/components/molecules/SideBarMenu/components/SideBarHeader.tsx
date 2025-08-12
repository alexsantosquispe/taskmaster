import { CollapseIcon, ExpandIcon } from '../../../../icons';

import cn from 'clsx';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { BoxIcon } from '../../../../icons/BoxIcon';
import { ToggleButton } from '../../../atoms/ToggleButton/ToggleButton';

interface SideBarHeaderProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export const LogoHeader = ({
  isCollapsed
}: Pick<SideBarHeaderProps, 'isCollapsed'>) => {
  return (
    <div className={twMerge('flex items-center gap-x-2')}>
      <BoxIcon className="rounded bg-blue-700 p-[0.1875rem] text-white dark:bg-orange-600" />
      <h1
        className={twMerge(
          'text-lg',
          cn({ 'md:hidden': isCollapsed, 'md:block': !isCollapsed })
        )}
      >
        <span className="font-bold">Task</span>Master
      </h1>
    </div>
  );
};

const SideBarHeader = ({ isCollapsed, setIsCollapsed }: SideBarHeaderProps) => {
  return (
    <NavLink
      to="/"
      className={twMerge(
        'hidden items-center justify-between p-2 md:flex',
        cn({
          'gap-2 md:flex-col-reverse': isCollapsed,
          'md:flex-row md:pl-4': !isCollapsed
        })
      )}
    >
      <LogoHeader isCollapsed={isCollapsed} />
      <ToggleButton
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        expandIcon={<ExpandIcon />}
        collapseIcon={<CollapseIcon />}
      />
    </NavLink>
  );
};

export default memo(SideBarHeader);
