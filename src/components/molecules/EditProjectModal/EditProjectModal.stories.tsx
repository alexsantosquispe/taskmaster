import {
  TestWrapper,
  ToastProviderWrapper,
  WrapperUI
} from '@/utils/test.utils';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/atoms/Button/Button';
import { PROJECTS } from '@/utils/mocks/projects';
import { configureStore } from '@reduxjs/toolkit';
import { useState } from 'react';
import { Provider } from 'react-redux';
import EditProjectModal from './EditProjectModal';

const meta: Meta<typeof EditProjectModal> = {
  title: 'Molecules/EditProjectModal',
  component: EditProjectModal,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof EditProjectModal>;

export const Default: Story = () => {
  const props = PROJECTS[0];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TestWrapper>
      <Provider
        store={configureStore({
          reducer: {}
        })}
      >
        <ToastProviderWrapper>
          <WrapperUI>
            <Button
              label="Edit Project"
              ariaLabel="Edit project modal"
              onClick={() => setIsOpen(true)}
            />
            {isOpen && (
              <EditProjectModal {...props} onClose={() => setIsOpen(false)} />
            )}
          </WrapperUI>
        </ToastProviderWrapper>
      </Provider>
    </TestWrapper>
  );
};

Default.args = {};
