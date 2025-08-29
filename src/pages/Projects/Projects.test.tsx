import '@testing-library/jest-dom';

import { ReduxWrapper, TestWrapper } from '@/utils/test.utils';
import { render, screen, waitFor } from '@testing-library/react';

import { PROJECTS } from '@/utils/mocks/projects';
import Projects from './Projects';

const mockOrder = jest.fn().mockResolvedValue({ data: [], error: null });

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        order: mockOrder
      }))
    }))
  }))
}));

describe('Projects', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the skeleton when loading', () => {
    render(
      <ReduxWrapper>
        <Projects />
      </ReduxWrapper>
    );

    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('should render the empty banner when there is no data', async () => {
    mockOrder.mockResolvedValue({ data: [], error: null });

    render(
      <ReduxWrapper>
        <Projects />
      </ReduxWrapper>
    );

    await waitFor(() =>
      expect(
        screen.getByText("There aren't projects to show")
      ).toBeInTheDocument()
    );
  });

  it('should render the projects grid when there is data', async () => {
    mockOrder.mockResolvedValue({ data: PROJECTS, error: null });

    render(
      <TestWrapper>
        <ReduxWrapper>
          <Projects />
        </ReduxWrapper>
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getAllByTestId('project-card').length).toBe(
        PROJECTS.length
      );
    });
  });
});
