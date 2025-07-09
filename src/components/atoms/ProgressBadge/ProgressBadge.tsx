interface ProgressBadgeProps {
  percentage: number;
}

export const ProgressBadge = ({ percentage }: ProgressBadgeProps) => {
  return (
    <div className="flex items-center gap-1 rounded-md border border-neutral-100 px-1.5 py-1 text-neutral-500 shadow-xs">
      <div className="h-4 w-4 rounded-full border-2 border-neutral-200" />
      <span>{percentage}%</span>
    </div>
  );
};
