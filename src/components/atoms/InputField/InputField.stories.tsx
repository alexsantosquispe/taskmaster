import type { Meta, StoryObj } from '@storybook/react';

import { Wrapper } from '@/utils/wrappers.utils';
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
      <Wrapper>
        <InputField {...props} control={control} />
      </Wrapper>
      <Wrapper>
        <InputField {...props} isDisabled={true} control={control} />
      </Wrapper>
      <Wrapper>
        <InputField {...props} isRequired={true} control={control} />
      </Wrapper>
      <Wrapper>
        <InputField
          {...props}
          isRequired={true}
          errorMessage="Error message"
          control={control}
        />
      </Wrapper>
    </div>
  );
};

Default.args = {};
