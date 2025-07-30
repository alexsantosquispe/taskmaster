import { Avatar } from './Avatar';
import { render } from '@testing-library/react';

describe('Avatar component', () => {
  it('should render the component correctly', () => {
    let component = render(<Avatar />);
    expect(component).toMatchSnapshot();

    component = render(<Avatar url="/img/user-avatar.webp" />);
    expect(component).toMatchSnapshot();
  });
});
