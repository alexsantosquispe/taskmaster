import type { Meta, StoryObj } from '@storybook/react';

import { WrapperUI } from '@/utils/test.utils';
import { useForm } from 'react-hook-form';
import { InputField } from './InputField';

const meta = {
  title: 'Atoms/InputField',
  component: InputField,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = () => {
  const { control } = useForm();
  const props = {
    label: 'Name',
    name: 'name',
    placeholder: 'Enter your name'
  };

  return (
    <div className="flex gap-4">
      <WrapperUI>
        <InputField {...props} control={control} />
      </WrapperUI>
      <WrapperUI>
        <InputField {...props} isDisabled={true} control={control} />
      </WrapperUI>
      <WrapperUI>
        <InputField {...props} isRequired={true} control={control} />
      </WrapperUI>
      <WrapperUI>
        <InputField
          {...props}
          isRequired={true}
          errorMessage="Error message"
          control={control}
        />
      </WrapperUI>
    </div>
  );
};

Default.args = {};
