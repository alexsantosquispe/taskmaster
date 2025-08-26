import { TooltipWrapper } from '@/components/atoms/TooltipWrapper/TooltipWrapper';
import {
  ALIGNMENT_TYPES,
  type NavBarLinkItem,
  type NavBarLinkSubItem
} from '@/models/types';
import cn from 'clsx';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { useIsMobile } from '@/hooks/useIsMobile';
import { ChevronDownIcon } from '@/icons';
import { NavBarLink } from './NavBarLink/NavBarLink';

interface SideBarSubItemProps extends NavBarLinkSubItem {
  onSelectItem: () => void;
}

export const SideBarSubItem = ({
  id,
  path,
  label,
  color,
  onSelectItem
}: SideBarSubItemProps) => {
  return (
    <li key={id} className="w-full">
      <NavBarLink
        path={path}
        ariaLabel={label}
        onClick={onSelectItem}
        className="justify-start"
      >
        <div className={twMerge('h-2 w-2 rounded-full', color)} />
        <span>{label}</span>
      </NavBarLink>
    </li>
  );
};

interface SideBarItemProps extends NavBarLinkItem {
  onSelectItem: () => void;
  isCollapsed?: boolean;
}

export const SideBarItem = ({
  id,
  label,
  path,
  icon,
  onSelectItem,
  isCollapsed = false,
  subItems
}: SideBarItemProps) => {
  const isMobile = useIsMobile();
  const [showSubItems, setShowSubItems] = useState(false);

  const selectItemHandler = () => {
    onSelectItem();
    if (!isMobile && subItems?.length) {
      setShowSubItems(!showSubItems);
    }
  };

  return (
    <li
      key={id}
      className={twMerge(
        'text-primary flex w-full flex-col items-center dark:text-white/90'
      )}
    >
      <NavBarLink path={path} ariaLabel={label} onClick={selectItemHandler}>
        <TooltipWrapper
          tooltipMessage={isCollapsed ? label : ''}
          tooltipAlignment={ALIGNMENT_TYPES.RIGHT}
          className={{ container: 'mr-2.5' }}
        >
          <div className="flex gap-4">
            {icon}
            {(!isCollapsed && label) || (isMobile && label)}
          </div>
        </TooltipWrapper>

        {!isMobile && subItems && !isCollapsed && (
          <ChevronDownIcon
            className={twMerge(
              'size-4 transition-transform duration-300',
              cn({
                'rotate-180': showSubItems
              })
            )}
          />
        )}
      </NavBarLink>

      {subItems && !isCollapsed && showSubItems && (
        <ul className="flex w-full flex-col gap-1 py-2 pl-10">
          {subItems.map((subItem) => (
            <SideBarSubItem
              key={subItem.id}
              {...subItem}
              onSelectItem={onSelectItem}
              path={`${path}${subItem.path}`}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
