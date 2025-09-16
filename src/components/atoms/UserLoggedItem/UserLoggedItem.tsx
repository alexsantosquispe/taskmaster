import { Avatar } from '../Avatar/Avatar';
import { ChevronUpIcon } from '@/icons';
import { Link } from 'react-router-dom';
import cn from 'clsx';
import { currentUser } from '@/constants';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { useAuth } from '@/hooks/useAuth';

interface UserLoggedItemProps {
  isCollapsed?: boolean;
}

const UserLoggedItem = ({ isCollapsed = false }: UserLoggedItemProps) => {
  const { user } = useAuth();

  return (
    <Link to="/home/profile">
      <div
        className={twMerge(
          'flex items-center rounded-lg py-2 hover:cursor-pointer hover:bg-neutral-100 dark:hover:bg-white/10',
          cn({
            'justify-between px-2': !isCollapsed,
            'justify-center': isCollapsed
          })
        )}
      >
        <div className="flex items-center gap-2">
          <Avatar />
          {!isCollapsed && (
            <div className="flex flex-col justify-center text-xs">
              <span>{currentUser.name}</span>
              <span className="text-neutral-600 dark:text-white/60">
                {user?.email}
              </span>
            </div>
          )}
        </div>

        {!isCollapsed && <ChevronUpIcon className="size-4 rotate-90" />}
      </div>
    </Link>
  );
};

export default memo(UserLoggedItem);
