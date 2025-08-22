import { Wrapper } from '@/utils/testing/unitTest.util';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const BREADCRUMBS = [
  {
    id: 'projects',
    label: 'Projects',
    href: ''
  },
  {
    id: 'proj-001',
    label: 'TaskMaster Mobile App',
    href: ''
  },
  {
    id: 'task-1',
    label: 'Task-001',
    href: ''
  },
  {
    id: 'sub-task-5',
    label: 'SubTask-005',
    href: ''
  }
];

const meta = {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = () => {
  return (
    <Wrapper>
      <Breadcrumb items={BREADCRUMBS} />
    </Wrapper>
  );
};

Default.args = {};
