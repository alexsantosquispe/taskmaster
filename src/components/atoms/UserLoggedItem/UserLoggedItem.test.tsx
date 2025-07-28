import { render } from '@testing-library/react';
import UserLoggedItem from './UserLoggedItem';

describe('UserLoggedItem', () => {
  const props = {
    name: 'Jhon Doe',
    email: 'jhon@test.com',
    avatarUrl: './img/avatar.webp'
  };

  it('should render the component correctly', () => {
    const component = render(<UserLoggedItem {...props} />);

    expect(component).toMatchSnapshot();
  });
});
