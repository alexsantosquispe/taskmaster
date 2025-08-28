import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { useToast } from '@/hooks/useToast';
import { ToastProviderWrapper } from '@/utils/test.utils';
import { act } from 'react';

const TestComponent = ({ duration }: { duration?: number }) => {
  const { addToast } = useToast();

  return (
    <button
      onClick={() =>
        addToast({
          id: 'test',
          title: 'Title toast',
          message: 'This is a message',
          duration
        })
      }
    >
      Show Toast
    </button>
  );
};

describe('ToastStack', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should add and remove a toast from the stack', () => {
    render(
      <ToastProviderWrapper>
        <TestComponent />
      </ToastProviderWrapper>
    );

    expect(screen.getByTestId('toast-stack')).toBeInTheDocument();

    const button = screen.getByText('Show Toast');

    fireEvent.click(button);

    expect(screen.getByText('Title toast')).toBeInTheDocument();

    expect(screen.getByText('This is a message')).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: 'Close button' });

    fireEvent.click(closeButton);

    expect(screen.queryByText('Title toast')).not.toBeInTheDocument();
  });

  it('should add and should be removed after the duration', async () => {
    render(
      <ToastProviderWrapper>
        <TestComponent duration={1000} />
      </ToastProviderWrapper>
    );

    const button = screen.getByText('Show Toast');
    fireEvent.click(button);

    expect(screen.getByText('Title toast')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1100);
    });

    await waitFor(() => {
      expect(screen.queryByText('Title toast')).not.toBeInTheDocument();
    });
  });
});
