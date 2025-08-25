import { PROJECTS } from '../../../utils/mocks/projects';
import { ProjectCard } from './ProjectCard';
import { render } from '@testing-library/react';

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
    let component = render(<ProjectCard {...props} />);

    expect(component).toMatchSnapshot();

    component = render(<ProjectCard {...props} isSmall={true} />);

    expect(component).toMatchSnapshot();
  });
});
