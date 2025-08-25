import { TestWrapper } from '@/utils/testing/unitTest.util';
import { render } from '@testing-library/react';
import { PROJECTS } from '../../../utils/mocks/projects';
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
