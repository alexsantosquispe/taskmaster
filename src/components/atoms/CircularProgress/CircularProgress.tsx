import { twMerge } from 'tailwind-merge';

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const INITIAL_PERCENTAGE = 1;
const DEFAULT_SIZE = 16;
const STROKE_WIDTH = 2;

export const CircularProgress = ({
  percentage,
  size = DEFAULT_SIZE,
  strokeWidth = STROKE_WIDTH,
  className
}: CircularProgressProps) => {
  const defaultPercentage = percentage || INITIAL_PERCENTAGE;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - defaultPercentage / 100);

  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        className="stroke-gray-200 dark:stroke-neutral-600"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        className={twMerge(className)}
      />
    </svg>
  );
};
