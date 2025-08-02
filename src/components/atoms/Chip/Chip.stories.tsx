import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = () => {
  return <Chip label="Default Chip" />;
};

Default.args = {};
