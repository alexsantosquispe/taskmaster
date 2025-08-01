import type { TaskType } from '../../../models/types';
import { getPriorityStyles } from '../../../utils';
import { Avatar } from '../Avatar/Avatar';
import { Chip } from '../Chip/Chip';
import { CommentsBadge } from '../CommentsBadge/CommentsBadge';
import { DateBadge } from '../DateBadge/DateBadge';
import { ProgressBadge } from '../ProgressBadge/ProgressBadge';

export type TaskItemCardProps = Omit<TaskType, 'createdAt' | 'status'>;

export const TaskItemCard = ({
  id,
  title,
  description,
  priority,
  progress,
  lastUpdate
}: TaskItemCardProps) => {
  const priorityStyles = getPriorityStyles(priority);

  return (
    <article
      data-id={id}
      className="flex w-full flex-col rounded-xl border border-neutral-200 bg-white px-3 text-[0.8125rem] dark:border-neutral-700 dark:bg-transparent dark:text-white"
    >
      <div className="flex flex-col gap-2 pt-2">
        <a
          href="#"
          className="text-[0.9375rem] hover:cursor-pointer hover:text-blue-600 hover:underline dark:hover:text-orange-500"
        >
          {title}
        </a>
        <p className="line-clamp-2 max-h-12 text-neutral-700 dark:text-white/80">
          {description}
        </p>
      </div>

      <div className="pt-2">
        <Chip label={priority} className={priorityStyles} />
      </div>

      <div className="flex w-full items-center justify-between py-2 text-neutral-600">
        <DateBadge date={lastUpdate} />
        <ProgressBadge percentage={progress} />
      </div>

      <hr className="text-neutral-200 dark:text-neutral-700" />
      <div className="flex items-center justify-between gap-2 py-2 dark:text-white/80">
        <Avatar url="/img/user-avatar.webp" />
        <CommentsBadge numberOfComments={23} />
      </div>
    </article>
  );
};
