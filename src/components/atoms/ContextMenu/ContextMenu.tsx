import { useClickOutside } from '@/hooks/useClickOutside';
import type { Option } from '@/models/types';
import { useRef, useState, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../Button/Button';

interface ContextMenuProps {
  ariaLabel: string;
  options: Option[];
  onSelectOption: (option: Option) => void;
  label?: string;
  icon?: ReactNode;
  isSecondary?: boolean;
  className?: {
    mainContainer?: string;
    button?: string;
    contentWrapper?: string;
  };
}

export const ContextMenu = ({
  ariaLabel,
  options,
  onSelectOption,
  label = '',
  icon,
  isSecondary = true,
  className
}: ContextMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false));

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const onSelectOptionHandler = (option: Option) => {
    onSelectOption(option);
    setIsOpen(false);
  };

  return (
    <div
      ref={menuRef}
      className={twMerge('relative flex flex-col', className?.mainContainer)}
    >
      <Button
        ariaLabel={ariaLabel}
        onClick={toggleMenu}
        isSecondary={isSecondary}
        label={label}
        icon={icon}
        className={twMerge('rounded-md p-1', className?.button)}
      />
      {isOpen && (
        <div
          data-testid="context-menu"
          className={twMerge(
            'dark:bg-primary absolute top-full right-0 mt-1 w-fit rounded-lg border border-neutral-200 bg-white p-1 shadow-md dark:border-white/20 dark:shadow-none',
            className?.contentWrapper
          )}
        >
          <ul className="flex flex-col gap-1">
            {options.map((option) => (
              <li key={option.value}>
                <Button
                  label={option.label}
                  ariaLabel={`${option.label} option`}
                  onClick={() => onSelectOptionHandler(option)}
                  isSecondary={true}
                  className="hover:text-primary w-full justify-start rounded-md px-2 py-1 font-medium hover:cursor-default dark:hover:text-white"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
