import type { Meta, StoryObj } from '@storybook/react';

import { ReduxWrapper, TestWrapper } from '@/utils/test.utils';
import UserLoggedItem from './UserLoggedItem';

const meta = {
  title: 'Atoms/UserLoggedItem',
  component: UserLoggedItem,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof UserLoggedItem>;

export default meta;

type Story = StoryObj<typeof UserLoggedItem>;

export const Default: Story = () => {
  return (
    <TestWrapper>
      <ReduxWrapper>
        <UserLoggedItem />
      </ReduxWrapper>
    </TestWrapper>
  );
};

Default.args = {};
