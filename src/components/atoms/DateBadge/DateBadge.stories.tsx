import type { Meta, StoryObj } from '@storybook/react';

import { DateBadge } from './DateBadge';

const meta = {
  title: 'Atoms/DateBadge',
  component: DateBadge,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof DateBadge>;

export default meta;

type Story = StoryObj<typeof DateBadge>;

export const Default: Story = () => {
  return <DateBadge date="2025-07-01T10:24:00-04:00" />;
};

Default.args = {};
