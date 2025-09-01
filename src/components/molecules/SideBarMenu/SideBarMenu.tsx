import {
  BoardIcon,
  ChartPieIcon,
  InfoIcon,
  ProjectIcon,
  SettingsIcon,
  TasksListIcon
} from '@/icons';

import SwitchThemeButton from '@/components/atoms/SwitchThemeButton/SwitchThemeButton';
import UserLoggedItem from '@/components/atoms/UserLoggedItem/UserLoggedItem';
import { currentUser } from '@/constants';
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
    path: '/dashboard'
  },
  {
    id: '2',
    label: 'Projects',
    icon: <ProjectIcon />,
    path: '/projects',
    subItems: [
      {
        id: '2-1',
        label: 'Intex Company',
        path: '/intex-company',
        color: 'bg-indigo-600'
      },
      {
        id: '2-2',
        label: 'TaskMaster Mobile App',
        path: '/taskmaster-mobile-app',
        color: 'bg-teal-500'
      },
      {
        id: '2-3',
        label: 'E-commerce Website',
        path: '/e-commerce-website',
        color: 'bg-red-600'
      }
    ]
  },
  {
    id: '3',
    label: 'Tasks',
    icon: <TasksListIcon />,
    path: '/tasks'
  },
  {
    id: '4',
    label: 'Reports',
    icon: <ChartPieIcon />,
    path: '/reports'
  }
];

export const FOOTER_ITEMS: NavBarLinkItem[] = [
  {
    id: '5',
    label: 'Settings',
    icon: <SettingsIcon />,
    path: '/settings'
  },
  {
    id: '6',
    label: 'Help',
    icon: <InfoIcon />,
    path: '/help'
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
        'md:dark:bg-primary dark:bg-primary/70 fixed z-40 flex flex-col border-b border-gray-200 bg-white/40 backdrop-blur-md transition-all duration-300 ease-in-out md:relative md:rounded-xl md:border md:bg-white md:shadow-xl dark:border-white/15',
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
            <ul>
              {FOOTER_ITEMS.map((item) => (
                <SideBarItem
                  key={item.id}
                  {...item}
                  onSelectItem={onSelectItem}
                  isCollapsed={isMenuCollapsed}
                />
              ))}
            </ul>

            <SwitchThemeButton isCollapsed={isMenuCollapsed} />

            <div className="pt-2">
              <UserLoggedItem {...currentUser} isCollapsed={isMenuCollapsed} />
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
