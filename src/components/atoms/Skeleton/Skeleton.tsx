import { twMerge } from 'tailwind-merge';

interface SkeletonItemProps {
  className?: string;
}

export const SkeletonItem = ({ className }: SkeletonItemProps) => {
  const rowStyles = 'w-full rounded bg-neutral-200 dark:bg-white/15';

  return (
    <div
      className={twMerge(
        'flex h-32 animate-pulse flex-col gap-2 rounded-lg border border-neutral-200 px-4 py-3 dark:border-white/15',
        className
      )}
    >
      <div className="flex flex-1 flex-col gap-4">
        <div className={twMerge(rowStyles, 'h-6')} />
        <div className={twMerge(rowStyles, 'h-4')} />
      </div>
      <div className={twMerge(rowStyles, 'h-3 w-5/6 self-end')} />
    </div>
  );
};

interface SkeletonProps {
  numberOfItems?: number;
  className?: {
    container?: string;
    item?: string;
  };
}

export const Skeleton = ({ numberOfItems = 10, className }: SkeletonProps) => {
  const items = [...Array(numberOfItems).keys()];

  return (
    <div
      className={twMerge(
        'grid w-full gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4',
        className?.container
      )}
    >
      {items.map((_, index) => (
        <SkeletonItem key={index} className={className?.item} />
      ))}
    </div>
  );
};
