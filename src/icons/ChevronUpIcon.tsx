import { twMerge } from 'tailwind-merge';
import type { SvgIconProps } from '../models/types';

export const ChevronUpIcon = ({ className }: SvgIconProps) => {
  return (
    <svg
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
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
};
