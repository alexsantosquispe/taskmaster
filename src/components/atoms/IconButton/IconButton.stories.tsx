import type { Meta, StoryObj } from '@storybook/react';

import { CirclePlusIcon } from '@/icons';
import { Wrapper } from '@/utils/testing/unitTest.util';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = () => {
  return (
    <Wrapper>
      <IconButton
        ariaLabel="Icon button"
        icon={<CirclePlusIcon />}
        onClick={() => {}}
        tooltipMessage="Tooltip message"
      />
    </Wrapper>
  );
};

Default.args = {};
