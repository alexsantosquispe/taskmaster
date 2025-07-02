import { EllipsisVerticalIcon } from '../../../icons/EllipsisVerticalIcon';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

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
        'flex items-center rounded-lg border-gray-200 py-2',
        clsx({
          'justify-between border pr-2 pl-3': !isCollapsed,
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
            <span className="text-gray-600">{email}</span>
          </div>
        )}
      </div>

      {!isCollapsed && (
        <EllipsisVerticalIcon className="size-6 rounded p-1 hover:cursor-pointer hover:bg-blue-50 hover:text-blue-600" />
      )}
    </div>
  );
};
