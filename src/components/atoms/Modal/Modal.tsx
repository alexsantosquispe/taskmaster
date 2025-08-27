import useKeyPress from '@/hooks/useKeyPress';
import { CloseIcon } from '@/icons';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconButton } from '../IconButton/IconButton';

interface ModalProps {
  title?: string;
  children: ReactNode;
  onClose: () => void;
  classNames?: {
    container?: string;
    header?: string;
    body?: string;
  };
}

export const Modal = ({ title, onClose, children, classNames }: ModalProps) => {
  useKeyPress('Escape', onClose);

  return (
    <div
      className={
        'bg-primary/70 fixed inset-0 z-50 flex items-end justify-center backdrop-blur-xs md:items-center md:p-8'
      }
    >
      <div
        data-testid="modal"
        className={twMerge(
          'dark:bg-primary flex w-fit flex-col rounded-t-xl bg-white md:min-w-[25rem] md:rounded-xl dark:border dark:border-white/5',
          classNames?.container
        )}
      >
        <div
          className={twMerge(
            'flex items-center justify-between border-b border-neutral-200 px-2 py-1 dark:border-white/20',
            classNames?.header
          )}
        >
          {title && <h3 className="p-2 font-bold">{title}</h3>}
          <IconButton
            ariaLabel="Close modal button"
            onClick={onClose}
            icon={<CloseIcon />}
            tooltipMessage="Close"
            isDefault={false}
          />
        </div>

        <div className={twMerge('flex p-2', classNames?.body)}>{children}</div>
      </div>
    </div>
  );
};
