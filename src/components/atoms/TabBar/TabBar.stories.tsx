import type { Meta, StoryObj } from '@storybook/react';
import TabBar from './TabBar';

const TABS = [
  {
    id: '1',
    label: 'Board'
  },
  {
    id: '2',
    label: 'To-Do'
  },
  {
    id: '3',
    label: 'Table'
  },
  {
    id: '4',
    label: 'List'
  }
];

const meta = {
  title: 'Atoms/TabBar',
  component: TabBar,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof TabBar>;

export default meta;

type Story = StoryObj<typeof TabBar>;

export const Default: Story = () => {
  return <TabBar tabs={TABS} />;
};

Default.args = {};
