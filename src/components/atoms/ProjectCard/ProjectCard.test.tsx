import { TestWrapper } from '@/utils/testing/unitTest.util';
import { render } from '@testing-library/react';
import { PROJECTS } from '../../../utils/mocks/projects';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  const props = { ...PROJECTS[0] };

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2025, 7, 24));
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
