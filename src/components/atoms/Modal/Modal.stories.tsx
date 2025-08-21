import type { Meta, StoryObj } from '@storybook/react';

import { Wrapper } from '@/utils/testing/unitTest.util';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Modal } from './Modal';

const meta = {
  title: 'Atoms/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <div className="flex flex-col">
        <Button
          ariaLabel="Button to open modal"
          label="Open modal"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <Modal title="Modal" onClose={() => setIsOpen(false)}>
            <div>Modal content</div>
          </Modal>
        )}
      </div>
    </Wrapper>
  );
};

Default.args = {};
