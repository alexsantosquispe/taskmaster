import { UserIcon } from '../../../icons';

export const Avatar = () => {
  return (
    <div className="flex w-fit items-center justify-center overflow-hidden rounded-full bg-gray-200 p-0.5 text-neutral-500">
      <UserIcon className="size-5" />
    </div>
  );
};
