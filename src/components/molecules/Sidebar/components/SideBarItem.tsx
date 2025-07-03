import { ChevronDownIcon } from '../../../../icons/ChevronDownIcon';
import type { ReactNode } from 'react';
import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

export type SideBarSubItemType = {
  id: string;
  label: string;
  color: string;
};
interface SideBarItemProps {
  id: string;
  label: string;
  icon: ReactNode;
  onSelectItem: (id: string) => void;
  isActive?: boolean;
  isCollapsed?: boolean;
  subItems?: SideBarSubItemType[];
}

export const SideBarItem = ({
  id,
  label,
  icon,
  onSelectItem,
  isActive = false,
  isCollapsed = false,
  subItems
}: SideBarItemProps) => {
  const onClickOption = () => {
    onSelectItem(id);
  };

  return (
    <button onClick={onClickOption} className="w-full">
      <li
        key={id}
        className={twMerge('text-primary/80 flex w-full flex-col items-center')}
      >
        <div
          className={twMerge(
            'flex w-full justify-between gap-2 rounded-lg p-2',
            'transition-colors duration-150 ease-in-out hover:cursor-pointer hover:bg-blue-50 hover:text-blue-600',
            cn({ 'bg-blue-50 text-blue-600': isActive })
          )}
        >
          <div className="flex gap-4">
            <div>{icon}</div>
            {!isCollapsed && label}
          </div>

          {subItems && !isCollapsed && <ChevronDownIcon className="size-4" />}
        </div>

        <ul>
          {subItems?.map((subItem) => (
            <li key={subItem.id} className="py-2">
              <div className="flex items-center gap-2">
                <div
                  className={twMerge('h-2 w-2 rounded-full', subItem.color)}
                />
                <span>{subItem.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </li>
    </button>
  );
};
