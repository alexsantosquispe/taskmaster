import { EllipsisVerticalIcon } from '../../../icons/EllipsisVerticalIcon';

interface UserLoggedItemProps {
  name: string;
  email: string;
  avatarUrl?: string;
}

export const UserLoggedItem = ({
  name,
  email,
  avatarUrl
}: UserLoggedItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 py-2 pr-2 pl-3">
      <div className="flex items-center gap-2">
        <img src={avatarUrl} className="h-8 w-8" alt="avatar user" />

        <div className="flex flex-col justify-center text-xs">
          <span>{name}</span>
          <span className="text-gray-600">{email}</span>
        </div>
      </div>

      <EllipsisVerticalIcon className="size-6 rounded p-1 hover:cursor-pointer hover:bg-blue-50 hover:text-blue-600" />
    </div>
  );
};
