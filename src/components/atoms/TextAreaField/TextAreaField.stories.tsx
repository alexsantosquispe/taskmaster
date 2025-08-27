import type { Meta, StoryObj } from '@storybook/react';

import { Wrapper } from '@/utils/wrappers.utils';
import { useForm } from 'react-hook-form';
import { TextAreaField } from './TextAreaField';

const meta = {
  title: 'Atoms/TextAreaField',
  component: TextAreaField,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof TextAreaField>;

export default meta;

type Story = StoryObj<typeof TextAreaField>;

export const Default: Story = () => {
  const { control } = useForm();
  const props = {
    label: 'Detail',
    name: 'detail',
    placeholder: 'Enter text...'
  };

  return (
    <div className="flex gap-4">
      <Wrapper>
        <TextAreaField {...props} control={control} />
      </Wrapper>
      <Wrapper>
        <TextAreaField {...props} isDisabled={true} control={control} />
      </Wrapper>
      <Wrapper>
        <TextAreaField {...props} isRequired={true} control={control} />
      </Wrapper>
      <Wrapper>
        <TextAreaField
          {...props}
          errorMessage="Error message"
          control={control}
        />
      </Wrapper>
    </div>
  );
};

Default.args = {};
