import { CloseIcon, MenuIcon } from '../../../../icons';

import { twMerge } from 'tailwind-merge';
import { ToggleButton } from '../../../atoms/ToggleButton/ToggleButton';
import { LogoHeader } from './SideBarHeader';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <div className={twMerge('flex items-center justify-between p-2 md:hidden')}>
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
