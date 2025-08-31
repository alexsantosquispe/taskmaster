import '@testing-library/jest-dom';

import {
  ReduxWrapper,
  TestWrapper,
  ToastProviderWrapper
} from '@/utils/test.utils';
import { fireEvent, render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import EditProjectModal from './EditProjectModal';

const updatedData = {
  name: 'Updated',
  code: 'UP'
};

const currentData = {
  id: '123-465-789',
  name: 'Test',
  code: 'TS',
  color: '#2563eb',
  description: ''
};

const response = jest.fn().mockResolvedValue({
  data: { ...currentData, ...updatedData },
  error: null
});

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(() => ({
      update: jest.fn(() => ({
        eq: jest.fn(() => ({
          select: jest.fn(() => ({
            single: response
          }))
        }))
      }))
    }))
  }))
}));

describe('EditProjectModal', () => {
  const onCloseMock = jest.fn();
  const props = {
    ...currentData,
    onClose: onCloseMock
  };

  beforeEach(() => {
    render(
      <TestWrapper>
        <ReduxWrapper>
          <ToastProviderWrapper>
            <EditProjectModal {...props} onClose={onCloseMock} />
          </ToastProviderWrapper>
        </ReduxWrapper>
      </TestWrapper>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component correctly', () => {
    expect(screen.getByText('Edit project')).toBeInTheDocument();

    expect(screen.getByText('Update project')).toBeInTheDocument();
  });

  it('should call onClose when click the close button', () => {
    expect(screen.getByTestId('modal')).toBeInTheDocument();

    const closeButton = screen.getByRole('button', {
      name: 'Close modal button'
    });
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should update the project and show the success toast', async () => {
    const user = userEvent.setup();

    const inputName = screen.getByRole('textbox', {
      name: 'Project name *'
    });
    const inputCode = screen.getByRole('textbox', { name: 'Code *' });

    await user.type(inputName, updatedData.name);
    await user.type(inputCode, updatedData.code);

    const updateProjectButton = screen.getByRole('button', {
      name: 'Update project button'
    });

    expect(updateProjectButton).toBeInTheDocument();

    await user.click(updateProjectButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);

    expect(
      screen.getByText(`${updatedData.name} was updated successfully`)
    ).toBeInTheDocument();
  });
});
