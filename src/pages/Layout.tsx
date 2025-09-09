import SwitchThemeButton from '@/components/atoms/SwitchThemeButton/SwitchThemeButton';
import { LogoHeader } from '@/components/molecules/SideBarMenu/components/SideBarHeader';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="text-primary flex min-h-screen flex-col bg-white dark:bg-black dark:text-white">
      <nav className="fixed z-40 flex h-[3.5rem] w-full justify-between border-b border-neutral-200 bg-white/40 px-4 backdrop-blur-md md:bg-white dark:border-white/15 dark:bg-black/70">
        <LogoHeader isCollapsed={false} />
        <SwitchThemeButton isCollapsed={true} className="flex-row" />
      </nav>

      <main className="mt-[3.5rem] flex w-full flex-1 flex-col gap-2 md:flex-row md:p-2">
        {children}
      </main>

      <footer className="flex h-[3.5rem] w-full items-center justify-center border-t border-neutral-200 bg-neutral-100 px-4 text-sm backdrop-blur-md dark:border-white/15 dark:bg-black/70">
        <p>© 2025 TaskMaster. All rights reserved.</p>
      </footer>
    </div>
  );
};
