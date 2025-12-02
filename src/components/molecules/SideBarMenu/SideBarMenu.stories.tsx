import type { Meta, StoryObj } from '@storybook/react';

import { ReduxWrapper, TestWrapper } from '@/utils/test.utils';
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
      <ReduxWrapper>
        <div className="flex h-screen">
          <SideBarMenu />
        </div>
      </ReduxWrapper>
    </TestWrapper>
  );
};

Default.args = {};
