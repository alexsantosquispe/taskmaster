import { BoardIcon } from '../../../icons/BoardIcon';
import { BoxIcon } from '../../../icons/BoxIcon';
import { ChartPieIcon } from '../../../icons/ChartPieIcon';
import { InfoIcon } from '../../../icons/InfoIcon';
import { ProjectIcon } from '../../../icons/ProjectIcon';
import { SettingsIcon } from '../../../icons/SettingsIcon';
import { SideBarItem } from './components/SideBarItem';
import { TasksListIcon } from '../../../icons/TasksListIcon';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { UserLoggedItem } from '../UserLoggedItem/UserLoggedItem';
import cn from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

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
    subItems: []
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

export const Sidebar = () => {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);
  const [selectedId, setSelectedId] = useState(SIDE_BAR_ITEMS[0].id);

  return (
    <section
      className={twMerge(
        'flex flex-col rounded-xl bg-white shadow-lg',
        cn({ 'w-14': isSideBarCollapsed, 'w-80': !isSideBarCollapsed })
      )}
    >
      <div
        className={twMerge(
          'flex items-center justify-between p-2',
          cn({
            'flex-col-reverse gap-2': isSideBarCollapsed,
            'flex-row pl-5': !isSideBarCollapsed
          })
        )}
      >
        <div className={twMerge('flex items-center gap-x-3')}>
          <BoxIcon className="rounded bg-blue-600 p-[0.1875rem] text-white" />
          {!isSideBarCollapsed && (
            <h1>
              <strong className="font-semibold">Task</strong>Master
            </h1>
          )}
        </div>
        <ToggleButton
          isCollapsed={isSideBarCollapsed}
          setIsCollapsed={setIsSideBarCollapsed}
        />
      </div>

      <div className="flex h-full flex-col justify-between px-2 pt-4 pb-2 text-sm">
        <nav>
          <ul className="flex flex-col gap-1">
            {SIDE_BAR_ITEMS.map((item) => (
              <SideBarItem
                key={item.id}
                {...item}
                isActive={item.id === selectedId}
                onSelectItem={setSelectedId}
                isCollapsed={isSideBarCollapsed}
              />
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-1">
          {FOOTER_ITEMS.map((item) => (
            <SideBarItem
              key={item.id}
              {...item}
              isActive={item.id === selectedId}
              onSelectItem={setSelectedId}
              isCollapsed={isSideBarCollapsed}
            />
          ))}

          <UserLoggedItem {...currentUser} isCollapsed={isSideBarCollapsed} />
        </div>
      </div>
    </section>
  );
};
