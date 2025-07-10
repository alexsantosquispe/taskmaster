import { CalendarIcon } from '../../../icons';
import { formatDateToDayMonth } from '../../../utils';

interface DateBadgeProps {
  date: string;
}

export const DateBadge = ({ date }: DateBadgeProps) => {
  return (
    <div className="flex items-center gap-2 py-4 text-neutral-600 dark:text-white/80">
      <CalendarIcon className="size-4" />
      <span>{formatDateToDayMonth(date)}</span>
    </div>
  );
};
