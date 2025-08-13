import cn from 'clsx';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface NavBarLinkProps {
  path: string;
  children: ReactNode;
  ariaLabel: string;
  onClick: () => void;
  className?: string;
}

export const NavBarLink = ({
  path,
  children,
  onClick,
  ariaLabel,
  className
}: NavBarLinkProps) => {
  return (
    <NavLink
      to={path}
      aria-label={ariaLabel}
      onClick={onClick}
      className={({ isActive }) =>
        twMerge(
          'flex w-full items-center justify-between gap-2 rounded-lg px-2 py-3 transition-colors duration-150 ease-in-out hover:cursor-pointer md:p-2',
          'hover:text-accent dark:hover:text-accent-dark hover:bg-neutral-100 dark:hover:bg-white/5',
          cn({
            'text-accent dark:text-accent-dark bg-black/10 md:bg-neutral-100 dark:bg-white/5':
              isActive
          }),
          className
        )
      }
    >
      {children}
    </NavLink>
  );
};
