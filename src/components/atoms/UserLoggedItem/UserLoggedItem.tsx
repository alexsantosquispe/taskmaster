import { ContextMenu } from '../ContextMenu/ContextMenu';
import { EllipsisVerticalIcon } from '../../../icons/EllipsisVerticalIcon';
import type { Option } from '@/models/types';
import cn from 'clsx';
import { currentUser } from '@/constants';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { useAuth } from '@/hooks/useAuth';
import { useSignOutMutation } from '@/services/authApi';

interface UserLoggedItemProps {
  isCollapsed?: boolean;
}

const OPTIONS = [
  { label: 'Profile', value: 'profile' },
  { label: 'Logout', value: 'logout' }
];

const UserLoggedItem = ({ isCollapsed = false }: UserLoggedItemProps) => {
  const [signOut] = useSignOutMutation();
  const { user } = useAuth();

  const handleUserOptions = (option: Option) => {
    if (option.value === 'logout') {
      signOut();
    }
  };

  return (
    <div
      className={twMerge(
        'flex items-center rounded-lg py-2',
        cn({
          'justify-between px-2': !isCollapsed,
          'justify-center': isCollapsed
        })
      )}
    >
      <div className="flex items-center gap-2">
        <div className="h-8 w-8">
          <img
            src={currentUser.avatarUrl}
            className="h-8 w-8"
            alt="avatar user"
          />
        </div>

        {!isCollapsed && (
          <div className="flex flex-col justify-center text-xs">
            <span>{currentUser.name}</span>
            <span className="text-neutral-600 dark:text-white/60">
              {user?.email}
            </span>
          </div>
        )}
      </div>

      {!isCollapsed && (
        <ContextMenu
          ariaLabel="User logged options"
          options={OPTIONS}
          onSelectOption={handleUserOptions}
          icon={<EllipsisVerticalIcon className="size-4" />}
          className={{
            mainContainer: '-mr-2',
            contentWrapper:
              'top-auto right-auto bottom-full left-full min-w-[6rem]',
            button:
              'text-primary/80 hover:text-primary dark:text-white/70 dark:hover:text-white'
          }}
        />
      )}
    </div>
  );
};

export default memo(UserLoggedItem);
