import { twMerge } from 'tailwind-merge';
import { CommentCircleIcon } from '../../../icons';

interface CommentsBadgeProps {
  numberOfComments: number;
  className?: string;
}

export const CommentsBadge = ({
  numberOfComments,
  className
}: CommentsBadgeProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center justify-center gap-1 rounded-md border border-neutral-200 px-1 py-0.5 font-semibold text-neutral-600 shadow-sm dark:border-neutral-700 dark:text-white/80',
        className
      )}
    >
      <CommentCircleIcon className="text-neutral-400" />
      <span>{numberOfComments}</span>
    </div>
  );
};
