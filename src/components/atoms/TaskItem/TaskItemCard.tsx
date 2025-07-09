import type { TaskType } from '../../../models/types';
import { DateBadge } from '../DateBadge/DateBadge';
import { ProgressBadge } from '../ProgressBadge/ProgressBadge';

type TaskItemCardProps = Omit<TaskType, 'priority' | 'createdAt' | 'status'>;

export const TaskItemCard = ({
  id,
  title,
  description,
  progress,
  lastUpdate
}: TaskItemCardProps) => {
  return (
    <article
      data-id={id}
      className="dark:bg-primary flex w-full flex-col rounded-lg border border-neutral-200 bg-white text-sm dark:border-neutral-700 dark:text-white"
    >
      <div className="flex flex-col gap-1 px-2 pt-3">
        <span className="font-medium">{title}</span>
        <p className="text-neutral-700 dark:text-white/80">{description}</p>
      </div>
      <div className="flex w-full items-center justify-between px-2 text-neutral-600">
        <DateBadge date={lastUpdate} />
        <ProgressBadge percentage={progress} />
      </div>

      <hr className="text-neutral-200 dark:text-neutral-700" />

      <div className="px-2 py-3 dark:text-white/80">assignees</div>
    </article>
  );
};
