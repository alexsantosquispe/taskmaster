import { WrapperUI } from '@/utils/test.utils';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = () => {
  return (
    <div className="flex gap-8">
      <WrapperUI>
        <Avatar url="/img/avatar.webp" />
      </WrapperUI>
      <WrapperUI>
        <Avatar />
      </WrapperUI>
    </div>
  );
};

Default.args = {};
