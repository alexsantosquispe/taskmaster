import type { Meta, StoryObj } from '@storybook/react';

import { CircleDotDashedIcon } from '../../../icons';
import { BACKLOG_TASKS } from '../../../utils/mocks/tasks';
import { StatusColumn } from './StatusColumn';

const meta = {
  title: 'Molecules/StatusColumn',
  component: StatusColumn
} satisfies Meta<typeof StatusColumn>;

export default meta;

type Story = StoryObj<typeof StatusColumn>;

export const Default: Story = () => {
  return (
    <StatusColumn
      title="Backlog"
      icon={<CircleDotDashedIcon />}
      tasks={BACKLOG_TASKS}
    />
  );
};

Default.args = {};
