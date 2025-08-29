import { ToastProviderWrapper, WrapperUI } from '@/utils/test.utils.tsx';
import type { Meta, StoryObj } from '@storybook/react';

import { useToast } from '@/hooks/useToast.ts';
import { TOAST_TYPES, type ToastMessage } from '@/models/types.ts';
import type { ReactNode } from 'react';
import { Button } from '../Button/Button.tsx';
import { ToastStack } from './ToastStack.tsx';

const UseToastWrapper = ({
  renderComponent
}: {
  renderComponent: (addToast: (toast: ToastMessage) => void) => ReactNode;
}) => {
  const { addToast } = useToast();

  return renderComponent(addToast);
};

const meta: Meta<typeof ToastStack> = {
  title: 'Atoms/ToastStack',
  component: ToastStack,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof ToastStack>;

export const Default: Story = () => {
  return (
    <ToastProviderWrapper>
      <div className="flex gap-8">
        <WrapperUI>
          <UseToastWrapper
            renderComponent={(addToast) => {
              return (
                <Button
                  ariaLabel="Default toast"
                  label="Default toast"
                  onClick={() =>
                    addToast({
                      id: 'test',
                      title: 'Title toast',
                      message: 'Toast message',
                      duration: 1000
                    })
                  }
                />
              );
            }}
          />
        </WrapperUI>
        <WrapperUI>
          <UseToastWrapper
            renderComponent={(addToast) => {
              return (
                <Button
                  ariaLabel="Success toast"
                  label="Success toast"
                  onClick={() =>
                    addToast({
                      id: 'test',
                      title: 'Title toast',
                      message: 'Toast message',
                      type: TOAST_TYPES.SUCCESS,
                      duration: 1000
                    })
                  }
                />
              );
            }}
          />
        </WrapperUI>
        <WrapperUI>
          <UseToastWrapper
            renderComponent={(addToast) => {
              return (
                <Button
                  ariaLabel="Error toast"
                  label="Error toast"
                  onClick={() =>
                    addToast({
                      id: 'test',
                      title: 'Title toast',
                      message: 'Toast message',
                      type: TOAST_TYPES.ERROR,
                      duration: 1000
                    })
                  }
                />
              );
            }}
          />
        </WrapperUI>
      </div>
    </ToastProviderWrapper>
  );
};

Default.args = {};
