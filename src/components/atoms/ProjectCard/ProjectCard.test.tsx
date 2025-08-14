import { render } from '@testing-library/react';
import { PROJECTS } from '../../../utils/mocks/projects';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  const props = { ...PROJECTS[0] };
  it('should render the component correctly', () => {
    let component = render(<ProjectCard {...props} />);

    expect(component).toMatchSnapshot();

    component = render(<ProjectCard {...props} isSmall={true} />);

    expect(component).toMatchSnapshot();
  });
});
