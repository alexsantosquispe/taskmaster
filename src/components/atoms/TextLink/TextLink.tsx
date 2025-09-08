import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
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
        'text-accent dark:text-accent-dark hover:underline',
        className
      )}
    >
      {children}
    </Link>
  );
};
