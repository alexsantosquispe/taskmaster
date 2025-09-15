import { BoardIcon, ChartPieIcon, ProjectIcon, TasksListIcon } from '@/icons';

import SwitchThemeButton from '@/components/atoms/SwitchThemeButton/SwitchThemeButton';
import UserLoggedItem from '@/components/atoms/UserLoggedItem/UserLoggedItem';
import { useIsMobile } from '@/hooks/useIsMobile';
import type { NavBarLinkItem } from '@/models/types';
import cn from 'clsx';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import SideBarHeader from './components/SideBarHeader';
import { SideBarItem } from './components/SideBarItem';

export const SIDE_BAR_ITEMS: NavBarLinkItem[] = [
  {
    id: '1',
    label: 'Dashboard',
    icon: <BoardIcon />,
    path: '/home/dashboard'
  },
  {
    id: '2',
    label: 'Projects',
    icon: <ProjectIcon />,
    path: '/home/projects'
  },
  {
    id: '3',
    label: 'Tasks',
    icon: <TasksListIcon />,
    path: '/home/tasks'
  },
  {
    id: '4',
    label: 'Reports',
    icon: <ChartPieIcon />,
    path: '/home/reports'
  }
];

export const SideBarMenu = () => {
  const isMobile = useIsMobile();
  const [isMenuCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const showMenu = !isMobile || (isMobile && isMobileMenuOpen);

  const onSelectItem = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <aside
      className={twMerge(
        'md:dark:bg-primary dark:bg-primary/70 fixed z-40 flex flex-col border-b border-gray-200 bg-white/40 backdrop-blur-md transition-all duration-300 ease-in-out md:relative md:rounded-xl md:border md:bg-white md:shadow-lg dark:border-white/15',
        cn({
          'w-full md:w-14': isMenuCollapsed,
          'w-full md:w-[16rem]': !isMenuCollapsed
        })
      )}
    >
      {!isMobile && (
        <SideBarHeader
          isCollapsed={isMenuCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      )}

      {isMobile && (
        <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      )}

      <div className="flex-col px-2 text-sm md:flex md:h-full md:justify-between md:p-2">
        {showMenu && (
          <nav>
            <ul className="flex flex-col gap-1 py-2 md:p-0">
              {SIDE_BAR_ITEMS.map((item) => (
                <SideBarItem
                  key={item.id}
                  {...item}
                  onSelectItem={onSelectItem}
                  isCollapsed={isMenuCollapsed}
                />
              ))}
            </ul>
          </nav>
        )}

        {!isMobile && (
          <div className="flex flex-col gap-1">
            <SwitchThemeButton isCollapsed={isMenuCollapsed} />
            <UserLoggedItem isCollapsed={isMenuCollapsed} />
          </div>
        )}
      </div>
    </aside>
  );
};
