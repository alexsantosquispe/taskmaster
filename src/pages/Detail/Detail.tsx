import {
  CircleCheckIcon,
  CircleDashedIcon,
  CircleDotDashedIcon,
  CircleDotIcon,
  LoadIcon
} from '@/icons';
import {
  BACKLOG_TASKS,
  DONE_TASKS,
  IN_PROGRESS_TASKS,
  ON_HOLD_TASKS,
  REVIEW_TASKS
} from '@/utils/mocks/tasks';

import { Breadcrumb } from '@/components/atoms/Breadcrumb/Breadcrumb';
import TabBar from '@/components/atoms/TabBar/TabBar';
import { StatusColumn } from '@/components/molecules/StatusColumn/StatusColumn';
import { useLocation } from 'react-router-dom';

const BREADCRUMBS = [
  {
    id: 'projects',
    label: 'Projects',
    href: '/home/projects'
  },
  {
    id: 'taskmaster-mobile-app',
    label: 'TaskMaster Mobile App',
    href: '/home/projects/taskmaster-mobile-app'
  }
];

const TABS = [
  {
    id: '1',
    label: 'Board'
  },
  {
    id: '2',
    label: 'To-Do'
  },
  {
    id: '3',
    label: 'Table'
  },
  {
    id: '4',
    label: 'List'
  }
];

const Detail = () => {
  const { state } = useLocation();

  return (
    <section className="flex w-full flex-col gap-2 md:gap-6 xl:max-w-[var(--width-large-screen)]">
      <div className="flex flex-col gap-2">
        <Breadcrumb items={BREADCRUMBS} />
        <h2 className="text-2xl leading-12 font-bold">{state?.projectName}</h2>
      </div>

      <div className="flex w-full flex-col gap-y-4 overflow-hidden md:h-full">
        <TabBar tabs={TABS} />
        <div className="scroll-x-auto md:scroll-none flex gap-x-2 overflow-auto md:overflow-hidden">
          <StatusColumn
            title="Backlog"
            icon={<CircleDotDashedIcon />}
            tasks={BACKLOG_TASKS}
          />
          <StatusColumn
            title="On Hold"
            icon={<CircleDashedIcon />}
            tasks={ON_HOLD_TASKS}
          />
          <StatusColumn
            title="In Progress"
            icon={<LoadIcon className="text-amber-500 dark:text-amber-300" />}
            tasks={IN_PROGRESS_TASKS}
          />
          <StatusColumn
            title="Review"
            icon={<CircleDotIcon />}
            tasks={REVIEW_TASKS}
          />
          <StatusColumn
            title="Done"
            icon={
              <CircleCheckIcon className="text-green-600 dark:text-green-500" />
            }
            tasks={DONE_TASKS}
          />
        </div>
      </div>
    </section>
  );
};

export default Detail;
