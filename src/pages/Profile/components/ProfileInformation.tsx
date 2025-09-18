import { Avatar } from '@/components/atoms/Avatar/Avatar';
import { ProfileForm } from '@/components/molecules/ProfileForm/ProfileForm';
import type { ProfileFormType } from '@/components/molecules/ProfileForm/ProfileForm.schema';

export const ProfileInformation = () => {
  const onSubmitProfile = (formData: ProfileFormType) => {
    //TODO: This console should be removed when the logic to update the profile is implemented
    console.log(formData);
  };

  return (
    <article className="dark:bg-primary flex flex-col gap-8 rounded-lg border border-neutral-200 p-4 md:px-6 dark:border-white/20">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold md:text-xl">
          Profile Information
        </h3>
      </div>

      <div className="flex w-full flex-col gap-8 md:flex-row">
        <div className="flex justify-center md:w-1/3">
          <Avatar className={{ container: 'h-36 w-36', icon: 'size-32' }} />
        </div>

        <ProfileForm onSubmitProfile={onSubmitProfile} />
      </div>
    </article>
  );
};
