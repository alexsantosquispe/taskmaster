import type { ReactNode } from 'react';
import { CirclePlusIcon } from '../../../icons';
import type { TaskType } from '../../../models/types';
import { TaskItemCard } from '../../atoms/TaskItem/TaskItemCard';

interface StatusColumnProps {
  title: string;
  icon: ReactNode;
  tasks: TaskType[];
}

export const StatusColumn = ({ title, icon, tasks }: StatusColumnProps) => {
  return (
    <div className="flex w-[19rem] flex-col overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 px-2 pb-2 dark:border-neutral-700 dark:bg-neutral-800">
      <div className="flex items-center justify-between py-4 text-neutral-800 dark:text-white">
        <div className="flex items-center gap-2 text-sm">
          {icon}
          <h3>{title}</h3>
        </div>
        <button className="text-neutral-500 hover:cursor-pointer hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-white">
          <CirclePlusIcon className="size-4" />
        </button>
      </div>

      <div className="flex flex-col gap-2 overflow-auto">
        {tasks.map((task) => (
          <TaskItemCard key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};
