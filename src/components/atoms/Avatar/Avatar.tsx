import { UserIcon } from '../../../icons';
interface AvatarProps {
  url?: string;
}

export const Avatar = ({ url }: AvatarProps) => {
  return (
    <div className="flex w-fit items-center justify-center overflow-hidden rounded-full bg-gray-200 p-0.5 text-neutral-500">
      {url ? (
        <img src={url} className="h-5 w-5" alt="User avatar image" />
      ) : (
        <UserIcon className="size-5" />
      )}
    </div>
  );
};
