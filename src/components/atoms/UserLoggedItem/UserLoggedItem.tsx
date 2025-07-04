import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EllipsisVerticalIcon } from '../../../icons/EllipsisVerticalIcon';

interface UserLoggedItemProps {
  name: string;
  email: string;
  avatarUrl: string;
  isCollapsed?: boolean;
}

export const UserLoggedItem = ({
  name,
  email,
  avatarUrl,
  isCollapsed = false
}: UserLoggedItemProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center rounded-lg border-gray-200 py-2 transition-opacity duration-300 ease-in-out',
        clsx({
          'justify-between border px-2': !isCollapsed,
          'justify-center': isCollapsed
        })
      )}
    >
      <div className="flex items-center gap-2">
        <div
          className={twMerge(
            'h-8 w-8',
            clsx({ 'hover:cursor-pointer': isCollapsed })
          )}
        >
          <img src={avatarUrl} className="h-8 w-8" alt="avatar user" />
        </div>

        {!isCollapsed && (
          <div className="flex flex-col justify-center text-xs">
            <span>{name}</span>
            <span className="text-gray-600">{email}</span>
          </div>
        )}
      </div>

      {!isCollapsed && (
        <EllipsisVerticalIcon className="size-6 rounded p-1 text-gray-600 hover:cursor-pointer hover:bg-blue-50 hover:text-blue-600" />
      )}
    </div>
  );
};
