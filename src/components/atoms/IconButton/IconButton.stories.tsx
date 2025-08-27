import { CirclePlusIcon, InfoIcon } from '@/icons';
import type { Meta, StoryObj } from '@storybook/react';

import { WrapperUI } from '@/utils/test.utils';
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
      <WrapperUI>
        <IconButton
          ariaLabel="Icon button"
          icon={<CirclePlusIcon />}
          onClick={() => {}}
        />
      </WrapperUI>

      <WrapperUI>
        <IconButton
          ariaLabel="Icon button"
          icon={<InfoIcon />}
          onClick={() => {}}
          tooltipMessage="Tooltip message"
        />
      </WrapperUI>
    </div>
  );
};

Default.args = {};
