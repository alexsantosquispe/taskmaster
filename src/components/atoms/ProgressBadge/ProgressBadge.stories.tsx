import type { Meta, StoryObj } from '@storybook/react';

import { Wrapper } from '@/utils/testing/unitTest.util';
import { ProgressBadge } from './ProgressBadge';

const meta = {
  title: 'Atoms/ProgressBadge',
  component: ProgressBadge,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ProgressBadge>;

export default meta;

type Story = StoryObj<typeof ProgressBadge>;

export const Default: Story = () => {
  return (
    <div className="flex items-center gap-4">
      <Wrapper className="gap-8">
        <ProgressBadge percentage={0} />
        <ProgressBadge percentage={40} />
        <ProgressBadge percentage={60} />
        <ProgressBadge percentage={80} />
      </Wrapper>
    </div>
  );
};

Default.args = {};
