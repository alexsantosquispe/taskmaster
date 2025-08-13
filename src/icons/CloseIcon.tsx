import { twMerge } from 'tailwind-merge';
import type { SvgIconProps } from '../models/types';

export const CloseIcon = ({ className }: SvgIconProps) => {
  return (
    <svg
      data-testid="close-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={twMerge('size-5', className)}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};
