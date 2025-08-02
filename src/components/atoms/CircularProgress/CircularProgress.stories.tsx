import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress } from './CircularProgress';

const meta = {
  title: 'Atoms/CircularProgress',
  component: CircularProgress,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof CircularProgress>;

export default meta;

type Story = StoryObj<typeof CircularProgress>;

export const Default: Story = () => {
  return (
    <CircularProgress
      percentage={65}
      size={40}
      strokeWidth={2}
      className="stroke-primary text-neutral-600 dark:stroke-white dark:text-white/80"
    />
  );
};

Default.args = {};
