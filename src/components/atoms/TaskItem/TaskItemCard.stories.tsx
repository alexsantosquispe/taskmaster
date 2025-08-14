import type { Meta, StoryObj } from '@storybook/react';

import { DONE_TASKS, IN_PROGRESS_TASKS } from '../../../utils/mocks/tasks';
import { TaskItemCard } from './TaskItemCard';

const inProgressCard = IN_PROGRESS_TASKS[0];
const doneCard = DONE_TASKS[1];

const meta = {
  title: 'Atoms/TaskItemCard',
  component: TaskItemCard,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof TaskItemCard>;

export default meta;

type Story = StoryObj<typeof TaskItemCard>;

export const Default: Story = () => {
  return (
    <div className="flex w-2/3 gap-8 self-center">
      <TaskItemCard {...inProgressCard} />
      <TaskItemCard {...doneCard} />
    </div>
  );
};

Default.args = {};
