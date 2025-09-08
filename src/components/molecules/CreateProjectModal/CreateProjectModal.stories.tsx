import {
  TestWrapper,
  ToastProviderWrapper,
  WrapperUI
} from '@/utils/test.utils';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/atoms/Button/Button';
import { configureStore } from '@reduxjs/toolkit';
import { useState } from 'react';
import { Provider } from 'react-redux';
import CreateProjectModal from './CreateProjectModal';

const meta: Meta<typeof CreateProjectModal> = {
  title: 'Molecules/CreateProjectModal',
  component: CreateProjectModal,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof CreateProjectModal>;

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
              label="New Project"
              ariaLabel="new project"
              onClick={() => setIsOpen(true)}
            />
            {isOpen && <CreateProjectModal onClose={() => setIsOpen(false)} />}
          </WrapperUI>
        </ToastProviderWrapper>
      </Provider>
    </TestWrapper>
  );
};

Default.args = {};
