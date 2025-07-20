import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { TabItem } from '../../../models/types';
import { TabBarItem } from './components/TabBarItem';

interface TabBarProps {
  tabs: TabItem[];
  className?: string;
}

const TabBar = ({ tabs, className }: TabBarProps) => {
  const [tabSelected, setTabSelected] = useState(tabs[0].id);

  return (
    <div
      className={twMerge(
        'flex w-full rounded-lg bg-neutral-100 p-0.5 text-sm md:w-fit dark:bg-neutral-800',
        className
      )}
    >
      {tabs.map((tab) => (
        <TabBarItem
          key={tab.id}
          tabItem={tab}
          isSelected={tabSelected === tab.id}
          onSelectTab={setTabSelected}
        />
      ))}
    </div>
  );
};

export default TabBar;
