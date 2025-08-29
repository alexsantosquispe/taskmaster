import { CloseIcon } from '@/icons';
import { TOAST_TYPES, type ToastMessage } from '@/models/types';
import cn from 'clsx';
import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconButton } from '../IconButton/IconButton';

interface ToastProps extends ToastMessage {
  onRemove: (toastId: string) => void;
  className?: string;
}

export const Toast = ({
  id,
  title,
  message,
  onRemove,
  type = TOAST_TYPES.DEFAULT,
  duration,
  className
}: ToastProps) => {
  useEffect(() => {
    if (!duration) return;
    const timer = setTimeout(() => onRemove(id), duration);
    return () => clearTimeout(timer);
  }, [duration, id]);

  return (
    <div
      data-testid={`toast-${id}`}
      className={twMerge(
        'flex max-h-[4.375rem] w-[22rem] flex-col gap-1 rounded-lg border p-3 text-sm shadow-lg backdrop-blur-lg',
        cn({
          'text-primary dark:bg-primary border-neutral-500 bg-white dark:border-white/30 dark:text-white':
            type === TOAST_TYPES.DEFAULT,
          'border-green-600 bg-green-50 text-green-700 dark:border-green-600 dark:bg-green-950 dark:text-green-500':
            type === TOAST_TYPES.SUCCESS,
          'border-rose-600 bg-rose-50 text-rose-700 dark:border-rose-600 dark:bg-rose-950 dark:text-rose-500':
            type === TOAST_TYPES.ERROR
        }),
        className
      )}
    >
      <div className="flex items-start justify-between">
        <span className="font-bold">{title}</span>
        <IconButton
          icon={<CloseIcon className="size-4" />}
          onClick={() => onRemove(id)}
          ariaLabel="Close button"
          className={twMerge(
            '-mt-1.5 -mr-1.5 rounded-full p-1',
            cn({
              'hover:bg-green-500/15 hover:text-green-700 dark:hover:text-green-500':
                type === TOAST_TYPES.SUCCESS,
              'hover:bg-rose-100 hover:text-rose-700 dark:hover:text-rose-500':
                type === TOAST_TYPES.ERROR
            })
          )}
          isDefault={false}
        />
      </div>

      <p className="font-regular line-clamp-1 text-neutral-700 dark:text-neutral-300">
        {message}
      </p>
    </div>
  );
};
