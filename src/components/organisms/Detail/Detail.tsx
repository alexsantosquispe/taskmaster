import {
  CircleCheckIcon,
  CircleDashedIcon,
  CircleDotDashedIcon,
  LoadIcon
} from '../../../icons';

import { TASKS } from '../../../utils/data/mocks';
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
    <section className="flex max-h-screen w-full flex-col gap-6 p-2">
      <div className="flex flex-col gap-2">
        <Breadcrumb items={BREADCRUMBS} />
        <h2 className="text-2xl leading-12 font-medium">
          TaskMaster Mobile App
        </h2>
      </div>

      {/* Board Section */}
      <div className="flex w-full flex-col gap-3 overflow-hidden">
        <TabBar tabs={TABS} />
        <div className="flex gap-3 overflow-hidden">
          <StatusColumn
            title="Backlog"
            icon={
              <CircleDotDashedIcon className="text-amber-500 dark:text-amber-300" />
            }
            tasks={TASKS}
          />

          <StatusColumn
            title="In Progress"
            icon={<LoadIcon className="text-blue-600 dark:text-blue-400" />}
            tasks={[TASKS[0], TASKS[1]]}
          />

          <StatusColumn
            title="Done"
            icon={
              <CircleCheckIcon className="text-green-600 dark:text-green-400" />
            }
            tasks={[TASKS[2]]}
          />

          <StatusColumn
            title="On Hold"
            icon={<CircleDashedIcon className="" />}
            tasks={[TASKS[3]]}
          />
        </div>
      </div>
    </section>
  );
};
