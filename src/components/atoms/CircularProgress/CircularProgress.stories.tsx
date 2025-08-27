import { Wrapper } from '@/utils/wrappers.utils';
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
    <div className="flex gap-8">
      <Wrapper className="min-w-24">
        <CircularProgress percentage={50} />
      </Wrapper>
      <Wrapper className="min-w-24">
        <CircularProgress percentage={80} size={30} strokeWidth={3} />
      </Wrapper>
    </div>
  );
};

Default.args = {};
