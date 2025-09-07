import {
  TestWrapper,
  ToastProviderWrapper,
  WrapperUI
} from '@/utils/test.utils';
import DeleteProjectModal from './DeleteProjectModal';

import { Button } from '@/components/atoms/Button/Button';
import { configureStore } from '@reduxjs/toolkit';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Provider } from 'react-redux';

const meta: Meta<typeof DeleteProjectModal> = {
  title: 'Molecules/DeleteProjectModal',
  component: DeleteProjectModal,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof DeleteProjectModal>;

export const Default: Story = () => {
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
              label="Delete Project"
              ariaLabel="delete project"
              onClick={() => setIsOpen(true)}
            />
            {isOpen && (
              <DeleteProjectModal
                projectId="1"
                projectName="Project 1"
                onClose={() => setIsOpen(false)}
              />
            )}
          </WrapperUI>
        </ToastProviderWrapper>
      </Provider>
    </TestWrapper>
  );
};

Default.args = {};
