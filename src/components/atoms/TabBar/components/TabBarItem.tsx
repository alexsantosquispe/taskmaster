import cn from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { TabItem } from '../../../../models/types';

interface TabBarItemProps {
  tabItem: TabItem;
  isSelected: boolean;
  onSelectTab: (tabId: string) => void;
  className?: string;
}

export const TabBarItem = ({
  tabItem,
  isSelected,
  onSelectTab,
  className
}: TabBarItemProps) => {
  return (
    <button
      key={tabItem.id}
      className={twMerge(
        'flex h-7 w-24 items-center justify-center gap-1 rounded-md text-neutral-500 transition-colors duration-150 ease-in-out hover:cursor-pointer dark:text-white/70',
        cn({
          'dark:bg-primary text-primary bg-white shadow dark:text-white':
            isSelected
        }),
        className
      )}
      onClick={() => onSelectTab(tabItem.id)}
    >
      {tabItem.label}
    </button>
  );
};
