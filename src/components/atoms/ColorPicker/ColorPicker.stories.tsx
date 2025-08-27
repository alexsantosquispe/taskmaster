import type { Meta, StoryObj } from '@storybook/react';

import { WrapperUI } from '@/utils/test.utils';
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
      <WrapperUI>
        <ColorPicker label="Color picker" />
      </WrapperUI>
      <WrapperUI>
        <ColorPicker label="Picker disabled" isDisabled={true} />
      </WrapperUI>
    </div>
  );
};

Default.args = {};
