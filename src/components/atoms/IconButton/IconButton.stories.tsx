import { CirclePlusIcon, InfoIcon } from '@/icons';
import type { Meta, StoryObj } from '@storybook/react';

import { Wrapper } from '@/utils/wrappers.utils';
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
    <div className="grid grid-cols-2 gap-8">
      <Wrapper>
        <IconButton
          ariaLabel="Icon button"
          icon={<CirclePlusIcon />}
          onClick={() => {}}
        />
      </Wrapper>

      <Wrapper>
        <IconButton
          ariaLabel="Icon button"
          icon={<InfoIcon />}
          onClick={() => {}}
          tooltipMessage="Tooltip message"
        />
      </Wrapper>
    </div>
  );
};

Default.args = {};
