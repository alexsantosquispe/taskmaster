import type { Meta, StoryObj } from '@storybook/react';

import UserLoggedItem from './UserLoggedItem';

const userMockItem = {
  name: 'Jhon Doe',
  email: 'jhon456@gmail.com',
  avatarUrl: '/img/avatar.webp'
};

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
  return <UserLoggedItem {...userMockItem} />;
};

Default.args = {};
