import { LogoutSection } from './components/LogoutSection';
import { ProfileInformation } from './components/ProfileInformation';

const Profile = () => {
  return (
    <section className="flex w-full flex-col gap-4 px-4 md:px-0 xl:max-w-[var(--width-medium-screen)]">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold md:text-3xl">Profile</h2>
        <p className="text-sm text-neutral-600 dark:text-white/70">
          View all your profile details here.
        </p>
      </div>
      <ProfileInformation />
      <LogoutSection />
    </section>
  );
};

export default Profile;
