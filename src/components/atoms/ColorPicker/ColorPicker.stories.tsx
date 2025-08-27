import type { Meta, StoryObj } from '@storybook/react';

import { Wrapper } from '@/utils/wrappers.utils';
import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Atoms/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = () => {
  return (
    <div className="flex gap-4">
      <Wrapper>
        <ColorPicker label="Color picker" />
      </Wrapper>
      <Wrapper>
        <ColorPicker label="Picker disabled" isDisabled={true} />
      </Wrapper>
    </div>
  );
};

Default.args = {};
