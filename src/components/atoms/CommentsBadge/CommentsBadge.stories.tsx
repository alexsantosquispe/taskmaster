import type { Meta, StoryObj } from '@storybook/react';

import { CommentsBadge } from './CommentsBadge';

const meta = {
  title: 'Atoms/CommentsBadge',
  component: CommentsBadge,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof CommentsBadge>;

export default meta;

type Story = StoryObj<typeof CommentsBadge>;

export const Default: Story = () => {
  return <CommentsBadge numberOfComments={26} />;
};

Default.args = {};
