import {
  CircleCheckIcon,
  CircleDashedIcon,
  CircleDotDashedIcon,
  CircleDotIcon,
  LoadIcon
} from '../../../icons';
import {
  BACKLOG_TASKS,
  DONE_TASKS,
  IN_PROGRESS_TASKS,
  ON_HOLD_TASKS,
  REVIEW_TASKS
} from '../../../utils/data/mocks';

import { Breadcrumb } from '../../atoms/Breadcrumb/Breadcrumb';
import TabBar from '../../atoms/TabBar/TabBar';
import { StatusColumn } from '../../molecules/StatusColumn/StatusColumn';

const BREADCRUMBS = [
  {
    id: 'projects',
    label: 'Projects',
    href: ''
  },
  {
    id: 'taskmaster-mobile-app',
    label: 'TaskMaster Mobile App',
    href: ''
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

export const Detail = () => {
  return (
    <section className="flex max-h-screen w-full flex-col gap-6 py-2 md:px-4 md:pt-4 md:pb-0">
      <div className="flex flex-col gap-2">
        <Breadcrumb items={BREADCRUMBS} />
        <h2 className="text-2xl leading-12 font-medium">
          TaskMaster Mobile App
        </h2>
      </div>

      {/* Board Section */}
      <div className="flex w-full flex-col gap-y-4 overflow-hidden md:h-full">
        <TabBar tabs={TABS} />
        <div className="scroll-x-auto md:scroll-none flex gap-x-3 overflow-auto md:overflow-hidden">
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
