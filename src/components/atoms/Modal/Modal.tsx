import { CloseIcon } from '@/icons';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconButton } from '../IconButton/IconButton';

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  classNames?: {
    container?: string;
    header?: string;
    body?: string;
  };
}
const MODAL_STYLES = {
  BACKDROP:
    'bg-primary/70 fixed inset-0 z-50 flex items-center justify-center p-8 backdrop-blur-xs',
  CONTAINER:
    'dark:bg-primary flex min-w-[32rem] flex-col rounded-xl bg-white dark:border dark:border-white/5',
  HEADER:
    'flex items-center justify-between border-b border-neutral-200 px-2 py-1 dark:border-white/20'
};

export const Modal = ({ title, onClose, children, classNames }: ModalProps) => {
  return (
    <div className={MODAL_STYLES.BACKDROP}>
      <div className={twMerge(MODAL_STYLES.CONTAINER, classNames?.container)}>
        <div className={twMerge(MODAL_STYLES.HEADER, classNames?.header)}>
          <h3 className="p-2 font-bold">{title}</h3>
          <IconButton
            ariaLabel="Close modal button"
            onClick={onClose}
            icon={<CloseIcon />}
            tooltipMessage="Close"
          />
        </div>

        <div className={twMerge('flex p-2', classNames?.body)}>{children}</div>
      </div>
    </div>
  );
};
