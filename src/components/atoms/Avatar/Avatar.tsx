import { UserRoundIcon } from '@/icons';
import { twMerge } from 'tailwind-merge';
interface AvatarProps {
  url?: string;
  className?: {
    container?: string;
    image?: string;
    icon?: string;
  };
}

export const Avatar = ({ url, className }: AvatarProps) => {
  return (
    <div
      className={twMerge(
        'flex h-6 w-6 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 dark:bg-white/20 dark:text-white/70',
        className?.container
      )}
    >
      {url ? (
        <img
          src={url}
          className={twMerge('size-6', className?.image)}
          alt="User avatar image"
        />
      ) : (
        <UserRoundIcon
          className={twMerge(
            'text-neutral-600 dark:text-white/90',
            className?.icon
          )}
        />
      )}
    </div>
  );
};
