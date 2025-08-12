import cn from 'clsx';
import type { ReactNode } from 'react';
import { NavLink, type NavLinkRenderProps } from 'react-router-dom';
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
  const getNavLinkStyles = ({ isActive }: NavLinkRenderProps) =>
    twMerge(
      'flex w-full items-center justify-between gap-2 rounded-lg px-2 py-3 transition-colors duration-150 ease-in-out hover:cursor-pointer md:p-2',
      'hover:bg-neutral-100 hover:text-blue-700 dark:hover:bg-white/5 dark:hover:text-orange-500',
      cn({
        'bg-black/10 text-blue-700 md:bg-neutral-100 dark:bg-white/5 dark:text-orange-500':
          isActive
      }),
      className
    );

  return (
    <NavLink
      to={path}
      aria-label={ariaLabel}
      onClick={onClick}
      className={getNavLinkStyles}
    >
      {children}
    </NavLink>
  );
};
