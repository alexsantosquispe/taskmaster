import { useForm, type Control, type FieldValues } from 'react-hook-form';

import { Avatar } from '@/components/atoms/Avatar/Avatar';
import { InputField } from '@/components/atoms/InputField/InputField';

const FIELD_STYLES = {
  container: 'md:flex-row md:items-center md:justify-between',
  label: 'md:w-1/3'
};

const Profile = () => {
  const { control } = useForm();

  return (
    <section className="flex w-full flex-col gap-8 px-4 md:px-0 xl:max-w-[var(--width-medium-screen)]">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold md:text-3xl">Profile</h2>
        <p className="text-sm text-neutral-600 dark:text-white/70">
          View all your profile details here.
        </p>
      </div>

      <article className="dark:bg-primary flex flex-col gap-4 rounded-lg border border-neutral-200 p-4 md:p-8 dark:border-white/20">
        <div className="flex">
          <h3 className="text-lg font-semibold md:text-xl">
            Profile Information
          </h3>
        </div>

        <div className="flex w-full flex-col gap-8 md:flex-row">
          <div className="flex items-center justify-center md:w-1/3">
            <Avatar className={{ container: 'h-36 w-36', icon: 'size-32' }} />
          </div>

          <form className="flex w-full gap-4">
            <div className="flex w-full flex-col gap-3">
              <InputField
                label="First name"
                name="firstName"
                control={control as unknown as Control<FieldValues>}
                placeholder="Enter your first name"
                className={FIELD_STYLES}
              />

              <InputField
                label="Last name"
                name="lastName"
                control={control as unknown as Control<FieldValues>}
                placeholder="Enter your last name"
                className={FIELD_STYLES}
              />

              <InputField
                label="Email"
                name="email"
                control={control as unknown as Control<FieldValues>}
                placeholder="Enter your email"
                className={FIELD_STYLES}
              />

              <InputField
                label="Username"
                name="username"
                control={control as unknown as Control<FieldValues>}
                placeholder="Enter a username"
                className={FIELD_STYLES}
              />
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Profile;
