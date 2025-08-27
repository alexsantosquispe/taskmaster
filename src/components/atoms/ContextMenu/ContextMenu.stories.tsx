import { EllipsisVerticalIcon } from '@/icons';
import { ContextMenu } from './ContextMenu';

import { Wrapper } from '@/utils/wrappers.utils';
import type { Meta, StoryObj } from '@storybook/react';
const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' }
];

const meta = {
  title: 'Atoms/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ContextMenu>;

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <Wrapper>
        <ContextMenu
          ariaLabel="test"
          options={options}
          onSelectOption={() => {}}
          label="Menu options"
          className={{
            contentWrapper: 'min-w-[7rem]',
            button: 'border border-neutral-200 px-2'
          }}
        />
      </Wrapper>

      <Wrapper>
        <ContextMenu
          ariaLabel="test"
          options={options}
          onSelectOption={() => {}}
          icon={<EllipsisVerticalIcon />}
          className={{
            contentWrapper: 'min-w-[7rem]',
            button: 'border border-neutral-200 px-2'
          }}
        />
      </Wrapper>
    </div>
  );
};

Default.args = {};
