import { fireEvent, render, screen } from '@testing-library/react';

import { PROJECTS } from '@/utils/mocks/projects';
import { TestWrapper } from '@/utils/test.utils';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  const props = { ...PROJECTS[0] };

  beforeEach(() => {
    jest.useFakeTimers();
    // Explicitly set UTC midnight on Aug 24, 2025
    jest.setSystemTime(new Date(Date.UTC(2025, 7, 24, 0, 0, 0)));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('styles', () => {
    it('should render the component correctly', () => {
      let component = render(
        <TestWrapper>
          <ProjectCard {...props} />
        </TestWrapper>
      );

      expect(component).toMatchSnapshot();

      component = render(
        <TestWrapper>
          <ProjectCard {...props} isSmall={true} />
        </TestWrapper>
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    it('should open the context menu when click the button', () => {
      render(
        <TestWrapper>
          <ProjectCard {...props} />
        </TestWrapper>
      );

      const optionsButton = screen.getByRole('button');

      fireEvent.click(optionsButton);

      expect(screen.getByTestId('context-menu')).toBeInTheDocument();
    });
  });
});
