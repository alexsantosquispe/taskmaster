import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar component', () => {
  it('should render the component correctly', () => {
    let component = render(<Avatar />);
    expect(component).toMatchSnapshot();

    component = render(<Avatar url="/img/user-avatar.webp" />);
    expect(component).toMatchSnapshot();
  });
});
