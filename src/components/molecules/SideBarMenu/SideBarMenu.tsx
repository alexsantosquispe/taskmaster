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
import SwitchThemeButton from '../../atoms/SwitchThemeButton/SwitchThemeButton';
import UserLoggedItem from '../../atoms/UserLoggedItem/UserLoggedItem';
import SideBarHeader from './components/SideBarHeader';
import { SideBarItem } from './components/SideBarItem';

const SIDE_BAR_ITEMS = [
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

const FOOTER_ITEMS = [
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
  const [selectedId, setSelectedId] = useState(SIDE_BAR_ITEMS[0].id);

  return (
    <section
      className={twMerge(
        'dark:bg-primary fixed flex flex-col border-b border-gray-200 bg-white shadow-xl transition-all duration-300 ease-in-out md:relative md:rounded-xl md:border dark:border-white/15',
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

      <div className="hidden flex-col justify-between p-2 text-sm md:flex md:h-full">
        <nav>
          <ul className="flex flex-col gap-1">
            {SIDE_BAR_ITEMS.map((item) => (
              <SideBarItem
                key={item.id}
                {...item}
                selectedId={selectedId}
                onSelectItem={setSelectedId}
                isCollapsed={isCollapsed}
              />
            ))}
          </ul>
        </nav>

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
      </div>
    </section>
  );
};
