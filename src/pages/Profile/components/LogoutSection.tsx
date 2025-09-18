import { Button } from '@/components/atoms/Button/Button';
import { useSignOutMutation } from '@/services/authApi';
import cn from 'clsx';

export const LogoutSection = () => {
  const [signOut, signOutResult] = useSignOutMutation();

  return (
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
  );
};
