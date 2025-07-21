import { getPercentageStyles } from '../../../utils';
import { CircularProgress } from '../CircularProgress/CircularProgress';

interface ProgressBadgeProps {
  percentage: number;
}

export const ProgressBadge = ({ percentage }: ProgressBadgeProps) => {
  const percentageStyles = getPercentageStyles(percentage);

  return (
    <div className="flex items-center justify-center gap-1 rounded-md border border-neutral-200 px-1 py-0.5 font-semibold text-neutral-600 dark:border-neutral-700 dark:text-white/80">
      <CircularProgress percentage={percentage} className={percentageStyles} />
      <span className={percentageStyles}>{percentage}%</span>
    </div>
  );
};
