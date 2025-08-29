import type { Meta, StoryObj } from '@storybook/react';

import { TOAST_TYPES } from '@/models/types';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Atoms/Toast',
  component: Toast,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = () => {
  return (
    <div className="flex flex-col gap-8">
      <Toast
        id="1"
        title="Default toast"
        message="message"
        type={TOAST_TYPES.DEFAULT}
        onRemove={() => {}}
      />
      <Toast
        id="2"
        title="Success toast"
        message="message"
        type={TOAST_TYPES.SUCCESS}
        onRemove={() => {}}
      />
      <Toast
        id="3"
        title="Error toast"
        message="message"
        type={TOAST_TYPES.ERROR}
        onRemove={() => {}}
      />
    </div>
  );
};

Default.args = {};
