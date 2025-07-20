import type { ReactNode } from 'react';
import type { TaskType } from '../../../models/types';
import { Chip } from '../../atoms/Chip/Chip';
import { TaskItemCard } from '../../atoms/TaskItem/TaskItemCard';

interface StatusColumnProps {
  title: string;
  icon: ReactNode;
  tasks: TaskType[];
}

export const StatusColumn = ({ title, icon, tasks }: StatusColumnProps) => {
  return (
    <div className="dark:bg-primary flex h-fit flex-col rounded-xl border border-neutral-200 bg-neutral-100 px-2 pb-2 md:h-auto md:w-1/5 md:overflow-hidden dark:border-neutral-700">
      <div className="flex items-center gap-2 py-4 text-sm text-neutral-800 dark:text-white">
        {icon}
        <div className="flex items-center gap-2">
          <h3>{title}</h3>
          <Chip
            label={`${tasks.length}`}
            className="min-w-5 rounded-full bg-neutral-300 dark:bg-neutral-700"
          />
        </div>
      </div>

      <div className="flex w-80 flex-col gap-2 md:w-full md:overflow-auto">
        {tasks.map((task) => (
          <TaskItemCard key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};
