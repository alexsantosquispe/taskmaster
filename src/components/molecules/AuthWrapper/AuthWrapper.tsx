import type { ReactNode } from 'react';

interface AuthWrapperProps {
  children: ReactNode;
}

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <div className="flex w-[26rem] flex-col gap-4 rounded-xl border border-neutral-200 px-8 py-16 shadow-lg md:px-12 dark:border-white/20">
      {children}
    </div>
  );
};
