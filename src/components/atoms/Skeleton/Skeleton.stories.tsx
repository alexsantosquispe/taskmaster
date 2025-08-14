import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = () => {
  return <Skeleton numberOfItems={7} />;
};

Default.args = {};
