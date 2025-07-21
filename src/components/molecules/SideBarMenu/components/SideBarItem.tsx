import cn from 'clsx';
import { useState, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { ChevronDownIcon } from '../../../../icons/ChevronDownIcon';

export type SideBarSubItemType = {
  id: string;
  label: string;
  color: string;
};
interface SideBarItemButtonWrapperProps {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
  ariaLabel: string;
  className?: string;
}

interface SideBarItemProps {
  id: string;
  label: string;
  icon: ReactNode;
  selectedId: string;
  onSelectItem: (id: string) => void;
  isCollapsed?: boolean;
  subItems?: SideBarSubItemType[];
}

const SideBarItemButtonWrapper = ({
  children,
  isActive,
  onClick,
  ariaLabel,
  className
}: SideBarItemButtonWrapperProps) => {
  return (
    <button
      className={twMerge(
        'flex w-full items-center justify-between gap-2 rounded-lg p-2 transition-colors duration-150 ease-in-out hover:cursor-pointer',
        'hover:bg-neutral-100 hover:text-blue-700 dark:hover:bg-white/5 dark:hover:text-orange-500',
        cn({
          'bg-neutral-100 text-blue-700 dark:bg-white/5 dark:text-orange-500':
            isActive
        }),
        className
      )}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const SideBarItem = ({
  id,
  label,
  icon,
  selectedId,
  onSelectItem,
  isCollapsed = false,
  subItems
}: SideBarItemProps) => {
  const [showSubItems, setShowSubItems] = useState(false);

  const selectItemHandler = () => {
    onSelectItem(id);
    if (subItems?.length) {
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
      <SideBarItemButtonWrapper
        isActive={id === selectedId}
        ariaLabel={label}
        onClick={selectItemHandler}
      >
        <div className="flex gap-4">
          <div>{icon}</div>
          {!isCollapsed && label}
        </div>

        {subItems && !isCollapsed && (
          <ChevronDownIcon
            className={twMerge(
              'size-4 transition-transform duration-300',
              cn({
                'rotate-180': showSubItems
              })
            )}
          />
        )}
      </SideBarItemButtonWrapper>

      {subItems && !isCollapsed && showSubItems && (
        <ul className="flex w-full flex-col gap-1 py-2 pl-10">
          {subItems.map((subItem) => (
            <li key={subItem.id} className="w-full">
              <SideBarItemButtonWrapper
                isActive={subItem.id === selectedId}
                ariaLabel={subItem.label}
                onClick={() => onSelectItem(subItem.id)}
                className="justify-start"
              >
                <div
                  className={twMerge('h-2 w-2 rounded-full', subItem.color)}
                />
                <span>{subItem.label}</span>
              </SideBarItemButtonWrapper>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
