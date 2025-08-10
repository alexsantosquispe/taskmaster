import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

const meta: Meta<typeof MobileMenu> = {
  title: 'Components/Molecules/SideBarMenu/MobileMenu',
  component: MobileMenu,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof MobileMenu>;

export const Default: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MobileMenu
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-[30rem] md:flex"
    />
  );
};

Default.args = {};
