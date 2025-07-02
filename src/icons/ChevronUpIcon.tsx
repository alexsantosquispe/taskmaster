import type { SvgIconProps } from '../types';
import { twMerge } from 'tailwind-merge';

export const ChevronUpIcon = ({ className }: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={twMerge('size-5', className)}
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
};
