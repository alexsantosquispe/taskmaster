import type { Meta, StoryObj } from '@storybook/react';

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
  return <UserLoggedItem />;
};

Default.args = {};
