import type { Meta, StoryObj } from '@storybook/react';

import { WrapperUI } from '@/utils/test.utils';
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
      <WrapperUI>
        <TextAreaField {...props} control={control} />
      </WrapperUI>
      <WrapperUI>
        <TextAreaField {...props} isDisabled={true} control={control} />
      </WrapperUI>
      <WrapperUI>
        <TextAreaField {...props} isRequired={true} control={control} />
      </WrapperUI>
      <WrapperUI>
        <TextAreaField
          {...props}
          errorMessage="Error message"
          control={control}
        />
      </WrapperUI>
    </div>
  );
};

Default.args = {};
