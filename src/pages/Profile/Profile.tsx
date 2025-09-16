const Profile = () => {
  return (
    <section className="flex w-full flex-col px-4 md:px-0 xl:max-w-[var(--width-large-screen)]">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold md:text-3xl">Profile</h2>
        <p className="text-sm text-neutral-600 dark:text-white/70">
          View all your profile details here.
        </p>
      </div>
    </section>
  );
};

export default Profile;
