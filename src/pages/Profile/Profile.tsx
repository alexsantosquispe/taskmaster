import { Avatar } from '@/components/atoms/Avatar/Avatar';
import { Button } from '@/components/atoms/Button/Button';
import { ProfileForm } from '@/components/molecules/ProfileForm/ProfileForm';
import type { ProfileFormType } from '@/components/molecules/ProfileForm/ProfileForm.schema';
import { useSignOutMutation } from '@/services/authApi';
import cn from 'clsx';

const Profile = () => {
  const [signOut, signOutResult] = useSignOutMutation();

  const onSubmitProfile = (formData: ProfileFormType) => {
    //TODO: This console should be removed when the logic to update the profile is implemented
    console.log(formData);
  };

  return (
    <section className="flex w-full flex-col gap-8 px-4 md:px-0 xl:max-w-[var(--width-medium-screen)]">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold md:text-3xl">Profile</h2>
        <p className="text-sm text-neutral-600 dark:text-white/70">
          View all your profile details here.
        </p>
      </div>

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

      <article className="dark:bg-primary flex items-center justify-between rounded-lg border border-neutral-200 p-4 md:px-6 dark:border-white/20">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold md:text-xl">Log out</h3>
          <p className="text-sm text-neutral-600 dark:text-white/70">
            Close your session here.
          </p>
        </div>

        <Button
          label="Log out"
          ariaLabel="Log out"
          className={cn({
            'bg-rose-700 hover:bg-rose-600 dark:bg-rose-800 dark:hover:bg-rose-700':
              !signOutResult.isLoading
          })}
          onClick={signOut}
          isLoading={signOutResult.isLoading}
        />
      </article>
    </section>
  );
};

export default Profile;
