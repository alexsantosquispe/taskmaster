import cn from 'clsx';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { EllipsisVerticalIcon } from '../../../icons/EllipsisVerticalIcon';

interface UserLoggedItemProps {
  name: string;
  email: string;
  avatarUrl: string;
  isCollapsed?: boolean;
}

const UserLoggedItem = ({
  name,
  email,
  avatarUrl,
  isCollapsed = false
}: UserLoggedItemProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center rounded-lg py-2 transition-opacity duration-300 ease-in-out hover:cursor-pointer',
        cn({
          'justify-between px-2 hover:bg-neutral-100 dark:hover:bg-neutral-800':
            !isCollapsed,
          'justify-center': isCollapsed
        })
      )}
    >
      <div className="flex items-center gap-2">
        <div className="h-8 w-8">
          <img src={avatarUrl} className="h-8 w-8" alt="avatar user" />
        </div>

        {!isCollapsed && (
          <div className="flex flex-col justify-center text-xs">
            <span>{name}</span>
            <span className="text-neutral-600 dark:text-white/60">{email}</span>
          </div>
        )}
      </div>

      {!isCollapsed && (
        <EllipsisVerticalIcon className="size-6 rounded p-1 text-neutral-600 hover:cursor-pointer dark:text-white/60" />
      )}
    </div>
  );
};

export default memo(UserLoggedItem);
