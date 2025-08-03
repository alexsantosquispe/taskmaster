import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '../../../contexts/ThemeProvider';
import { SideBarMenu } from './SideBarMenu';

const meta = {
  title: 'Molecules/SideBarMenu',
  component: SideBarMenu
} satisfies Meta<typeof SideBarMenu>;

export default meta;

type Story = StoryObj<typeof SideBarMenu>;

export const Default: Story = () => {
  return (
    <ThemeProvider>
      <div className="flex h-screen">
        <SideBarMenu />
      </div>
    </ThemeProvider>
  );
};

Default.args = {};
