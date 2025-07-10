import { getPercentageStyles } from '../../../utils';
import { CircularProgress } from '../CircularProgress/CircularProgress';

interface ProgressBadgeProps {
  percentage: number;
}

export const ProgressBadge = ({ percentage }: ProgressBadgeProps) => {
  const percentageStyles = getPercentageStyles(percentage);

  return (
    <div className="flex items-center gap-1 rounded-md border border-neutral-100 px-2 py-1 text-neutral-600 shadow-xs dark:border-neutral-700 dark:text-white/80">
      <CircularProgress percentage={percentage} className={percentageStyles} />
      <span className={percentageStyles}>{percentage}%</span>
    </div>
  );
};
