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
  const [selectedId, setSelectedId] = useState(SIDE_BAR_ITEMS[0].id);

  return (
    <section
      className={twMerge('flex w-80 flex-col rounded-xl bg-white shadow-lg')}
    >
      <div className="flex items-center justify-between p-2 pl-5">
        <div className="flex items-center gap-x-3">
          <BoxIcon className="rounded bg-blue-600 p-[0.1875rem] text-white" />
          <h1>
            <strong className="font-semibold">Task</strong>Master
          </h1>
        </div>
        <ToggleButton />
      </div>

      <div className="flex h-full flex-col justify-between px-2 pt-4 pb-2 text-sm">
        <nav>
          <ul className="flex flex-col gap-1">
            {SIDE_BAR_ITEMS.map((item) => (
              <SideBarItem
                {...item}
                isActive={item.id === selectedId}
                onSelectItem={setSelectedId}
              />
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-1">
          {FOOTER_ITEMS.map((item) => (
            <SideBarItem
              {...item}
              isActive={item.id === selectedId}
              onSelectItem={setSelectedId}
            />
          ))}

          <UserLoggedItem {...currentUser} />
        </div>
      </div>
    </section>
  );
};
