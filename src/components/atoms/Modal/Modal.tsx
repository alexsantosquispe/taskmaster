import type { ReactNode } from 'react';
import { CloseIcon } from '../../../icons';
import { IconButton } from '../IconButton/IconButton';

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ title, onClose, children }: ModalProps) => {
  return (
    <div className="bg-primary/70 fixed inset-0 z-50 flex items-center justify-center p-8 backdrop-blur-xs">
      <div className="dark:bg-primary flex min-w-[32rem] flex-col rounded-xl bg-white">
        <div className="flex items-center justify-between border-b border-neutral-200 px-2 py-1 dark:border-white/20">
          <h3 className="p-2 font-bold">{title}</h3>
          <IconButton
            ariaLabel="Close modal button"
            onClick={onClose}
            icon={<CloseIcon />}
            tooltipMessage="Close"
          />
        </div>

        <div className="flex p-2">{children}</div>
      </div>
    </div>
  );
};
