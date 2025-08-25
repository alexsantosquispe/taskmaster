import { CloseIcon, MenuIcon } from '@/icons';

import { LogoHeader } from '../SideBarHeader';
import { ToggleButton } from '@/components/atoms/ToggleButton/ToggleButton';
import { twMerge } from 'tailwind-merge';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  className?: string;
}

export const MobileMenu = ({
  isOpen,
  setIsOpen,
  className
}: MobileMenuProps) => {
  return (
    <div
      data-testid="mobile-menu"
      className={twMerge(
        'flex h-[3.5rem] items-center justify-between pr-2 pl-4 md:hidden',
        className
      )}
    >
      <LogoHeader isCollapsed={false} />
      <ToggleButton
        isCollapsed={isOpen}
        setIsCollapsed={setIsOpen}
        expandIcon={<CloseIcon />}
        collapseIcon={<MenuIcon />}
      />
    </div>
  );
};
