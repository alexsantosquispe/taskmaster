import '@testing-library/jest-dom';

import {
  ReduxWrapper,
  TestWrapper,
  ToastProviderWrapper
} from '@/utils/test.utils';
import { fireEvent, render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import CreateProjectModal from './CreateProjectModal';

const mockData = {
  id: '123-465-789',
  name: 'Project TEST',
  description: '',
  create_date: '2025-08-29T14:10:10.943491+00:00',
  color: '#2563eb',
  code: 'TEST',
  update_date: '2025-08-29T22:06:59.485366+00:00'
};

const response = jest.fn().mockResolvedValue({
  data: mockData,
  error: null
});

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(() => ({
      insert: jest.fn(() => ({
        select: jest.fn(() => ({
          single: response
        }))
      }))
    }))
  }))
}));

describe('CreateProjectModal', () => {
  const onCloseMock = jest.fn();

  beforeEach(() => {
    render(
      <TestWrapper>
        <ReduxWrapper>
          <ToastProviderWrapper>
            <CreateProjectModal onClose={onCloseMock} />
          </ToastProviderWrapper>
        </ReduxWrapper>
      </TestWrapper>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component correctly', () => {
    expect(screen.getByTestId('modal')).toBeInTheDocument();

    expect(screen.getByText('New project')).toBeInTheDocument();

    expect(
      screen.getByRole('form', { name: 'New project form' })
    ).toBeInTheDocument();
  });

  it('should call onClose when click the close button', () => {
    expect(screen.getByTestId('modal')).toBeInTheDocument();

    const closeButton = screen.getByRole('button', {
      name: 'Close modal button'
    });
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should show the error messages for required fields', async () => {
    const createProjectButton = screen.getByRole('button', {
      name: 'Create project button'
    });

    expect(createProjectButton).toBeInTheDocument();

    fireEvent.click(createProjectButton);

    const errorMessages = await screen.findAllByTestId('error-message');

    expect(errorMessages).toHaveLength(2);

    expect(
      await screen.findByText(`Project's name is required`)
    ).toBeInTheDocument();

    expect(await screen.findByText('Code is required')).toBeInTheDocument();
  });

  it('should create a project and show the success toast', async () => {
    const user = userEvent.setup();

    const inputName = screen.getByRole('textbox', {
      name: 'Project name *'
    });
    const inputCode = screen.getByRole('textbox', { name: 'Code *' });

    await user.type(inputName, mockData.name);
    await user.type(inputCode, mockData.code);

    const createProjectButton = screen.getByRole('button', {
      name: 'Create project button'
    });

    expect(createProjectButton).toBeInTheDocument();

    await user.click(createProjectButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);

    expect(
      screen.getByText('Project TEST was created successfully')
    ).toBeInTheDocument();
  });
});
