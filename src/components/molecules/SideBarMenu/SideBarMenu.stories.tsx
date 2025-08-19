import type { Meta, StoryObj } from '@storybook/react';

import { TestWrapper } from '@/utils/testing/unitTest.util';
import { SideBarMenu } from './SideBarMenu';

const meta = {
  title: 'Molecules/SideBarMenu',
  component: SideBarMenu
} satisfies Meta<typeof SideBarMenu>;

export default meta;

type Story = StoryObj<typeof SideBarMenu>;

export const Default: Story = () => {
  return (
    <TestWrapper>
      <div className="flex h-screen">
        <SideBarMenu />
      </div>
    </TestWrapper>
  );
};

Default.args = {};
