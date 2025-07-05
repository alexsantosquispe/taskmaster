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
import ThemeButton from '../../atoms/ThemeButton/ThemeButton';
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
  avatarUrl: '/img/avatar.png'
};

export const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedId, setSelectedId] = useState(SIDE_BAR_ITEMS[0].id);

  return (
    <section
      className={twMerge(
        'dark:bg-primary flex flex-col rounded-xl bg-white shadow-xl transition-all duration-300 ease-in-out',
        cn({ 'w-14': isCollapsed, 'w-[20rem]': !isCollapsed })
      )}
    >
      <SideBarHeader
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <div className="flex h-full flex-col justify-between p-2 text-sm">
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
          {FOOTER_ITEMS.map((item) => (
            <SideBarItem
              key={item.id}
              {...item}
              selectedId={selectedId}
              onSelectItem={setSelectedId}
              isCollapsed={isCollapsed}
            />
          ))}

          <ThemeButton isCollapsed={isCollapsed} />

          <div className="pt-2">
            <UserLoggedItem {...currentUser} isCollapsed={isCollapsed} />
          </div>
        </div>
      </div>
    </section>
  );
};
