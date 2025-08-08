import {
  BoardIcon,
  ChartPieIcon,
  InfoIcon,
  ProjectIcon,
  SettingsIcon,
  TasksListIcon
} from '../../../icons';

import cn from 'clsx';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useIsMobile } from '../../../hooks/useIsMobile';
import SwitchThemeButton from '../../atoms/SwitchThemeButton/SwitchThemeButton';
import UserLoggedItem from '../../atoms/UserLoggedItem/UserLoggedItem';
import { MobileMenu } from './components/MobileMenu';
import SideBarHeader from './components/SideBarHeader';
import { SideBarItem } from './components/SideBarItem';

export const SIDE_BAR_ITEMS = [
  {
    id: '1',
    label: 'Dashboard',
    icon: <BoardIcon />
  },
  {
    id: '2',
    label: 'Projects',
    icon: <ProjectIcon />,
    subItems: [
      {
        id: '2-1',
        label: 'Intex Company',
        color: 'bg-indigo-600'
      },
      {
        id: '2-2',
        label: 'TaskMaster Mobile App',
        color: 'bg-teal-500'
      },
      {
        id: '2-3',
        label: 'E-commerce Website',
        color: 'bg-red-600'
      }
    ]
  },
  {
    id: '3',
    label: 'Tasks',
    icon: <TasksListIcon />
  },
  {
    id: '4',
    label: 'Reports',
    icon: <ChartPieIcon />
  }
];

export const FOOTER_ITEMS = [
  {
    id: '5',
    label: 'Settings',
    icon: <SettingsIcon />
  },
  {
    id: '6',
    label: 'Help',
    icon: <InfoIcon />
  }
];

const currentUser = {
  name: 'Alex Santos',
  email: 'alex.santos456@gmail.com',
  avatarUrl: '/img/avatar.webp'
};

export const SideBarMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(SIDE_BAR_ITEMS[0].id);
  const isMobile = useIsMobile();
  const showMenu = !isMobile || (isMobile && isOpen);

  const onSelectItem = (id: string) => {
    setSelectedId(id);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <section
      className={twMerge(
        'md:dark:bg-primary dark:bg-primary/70 fixed z-50 flex flex-col border-b border-gray-200 bg-white/40 backdrop-blur-md transition-all duration-300 ease-in-out md:relative md:rounded-xl md:border md:bg-white md:shadow-xl dark:border-white/15',
        cn({
          'w-full md:w-14': isCollapsed,
          'w-full md:w-[20rem]': !isCollapsed
        })
      )}
    >
      <SideBarHeader
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-col px-2 text-sm md:flex md:h-full md:justify-between md:p-2">
        {showMenu && (
          <nav>
            <ul className="flex flex-col gap-1 py-2 md:p-0">
              {SIDE_BAR_ITEMS.map((item) => (
                <SideBarItem
                  key={item.id}
                  {...item}
                  selectedId={selectedId}
                  onSelectItem={onSelectItem}
                  isCollapsed={isCollapsed}
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
                  selectedId={selectedId}
                  onSelectItem={setSelectedId}
                  isCollapsed={isCollapsed}
                />
              ))}
            </ul>

            <SwitchThemeButton isCollapsed={isCollapsed} />

            <div className="pt-2">
              <UserLoggedItem {...currentUser} isCollapsed={isCollapsed} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
