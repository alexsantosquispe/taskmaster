import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface TextLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export const TextLink = ({ to, children, className }: TextLinkProps) => {
  return (
    <Link
      to={to}
      className={twMerge(
        'dark:text-accent-dark text-accent hover:underline',
        className
      )}
    >
      {children}
    </Link>
  );
};
