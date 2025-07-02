import type { ReactNode } from 'react';
import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SideBarItemProps {
  id: string;
  label: string;
  icon: ReactNode;
  onSelectItem: (id: string) => void;
  isActive?: boolean;
  isCollapsed?: boolean;
}

const ITEM_STYLES =
  'text-primary/80 flex w-full items-center gap-4 rounded-lg px-3 py-2 transition-colors duration-150 ease-in-out hover:cursor-pointer hover:bg-blue-50 hover:text-blue-600';

export const SideBarItem = ({
  id,
  label,
  icon,
  onSelectItem,
  isActive = false,
  isCollapsed = false
}: SideBarItemProps) => {
  return (
    <button onClick={() => onSelectItem(id)} className="w-full">
      <li
        key={id}
        className={twMerge(
          ITEM_STYLES,
          cn({ 'bg-blue-50 text-blue-600': isActive, 'px-2': isCollapsed })
        )}
      >
        <div>{icon}</div>
        {!isCollapsed && label}
      </li>
    </button>
  );
};
