import { twMerge } from 'tailwind-merge';

interface ChipProps {
  label: string;
  className?: string;
}

export const Chip = ({ label, className }: ChipProps) => {
  return (
    <div
      className={twMerge(
        'text-primary flex w-fit min-w-13 items-center justify-center gap-2 rounded-xl bg-gray-200 px-2 py-0.5 text-xs font-medium dark:bg-neutral-700 dark:text-white',
        className
      )}
    >
      <span>{label}</span>
    </div>
  );
};
