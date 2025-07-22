import cn from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { TabItem } from '../../../../models/types';

interface TabBarItemProps {
  tabItem: TabItem;
  isSelected: boolean;
  onSelectTab: (tabId: string) => void;
  className?: string;
  isCollapsed?: boolean;
}

export const TabBarItem = ({
  tabItem,
  isSelected,
  onSelectTab,
  className,
  isCollapsed = false
}: TabBarItemProps) => {
  return (
    <button
      key={tabItem.id}
      aria-label={tabItem.label}
      className={twMerge(
        'flex h-7 w-full items-center justify-center gap-1 rounded-md px-4 font-semibold text-neutral-600 transition-colors duration-150 ease-in-out hover:cursor-pointer md:w-24 dark:text-white/70',
        cn({
          'dark:bg-primary text-primary bg-white shadow dark:text-white':
            isSelected
        }),
        className
      )}
      onClick={() => onSelectTab(tabItem.id)}
    >
      {!!tabItem?.icon && <div>{tabItem.icon}</div>}
      {!isCollapsed && <span>{tabItem.label}</span>}
    </button>
  );
};
