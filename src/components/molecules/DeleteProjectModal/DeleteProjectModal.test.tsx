import '@testing-library/jest-dom';

import {
  ReduxWrapper,
  TestWrapper,
  ToastProviderWrapper
} from '@/utils/test.utils';
import { fireEvent, render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import DeleteProjectModal from './DeleteProjectModal';

const projectId = '1';
const projectName = 'Project 1';
const response = jest.fn().mockResolvedValue({
  data: { status: true, projectId },
  error: null
});

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(() => ({
      delete: jest.fn(() => ({
        eq: response
      }))
    }))
  }))
}));

describe('DeleteProjectModal', () => {
  const onCloseMock = jest.fn();

  beforeEach(() => {
    render(
      <TestWrapper>
        <ReduxWrapper>
          <ToastProviderWrapper>
            <DeleteProjectModal
              projectId={projectId}
              projectName={projectName}
              onClose={onCloseMock}
            />
          </ToastProviderWrapper>
        </ReduxWrapper>
      </TestWrapper>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component correctly', () => {
    expect(
      screen.getByText('Are you sure you want to delete this project?')
    ).toBeInTheDocument();

    expect(screen.getByText('Cancel')).toBeInTheDocument();

    expect(screen.getByText('Delete project')).toBeInTheDocument();
  });

  it('should call onClose when click the cancel button', () => {
    const cancelButton = screen.getByRole('button', {
      name: 'Cancel delete project'
    });
    fireEvent.click(cancelButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should delete the project', async () => {
    const user = userEvent.setup();

    const deleteProjectButton = screen.getByRole('button', {
      name: 'Delete project'
    });

    await user.click(deleteProjectButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);

    expect(
      screen.getByText(`${projectName} was deleted successfully`)
    ).toBeInTheDocument();
  });
});
