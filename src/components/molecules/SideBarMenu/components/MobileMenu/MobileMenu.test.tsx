import { render } from '@testing-library/react';
import { MobileMenu } from './MobileMenu';

describe('MobileMenu', () => {
  const props = {
    isOpen: false,
    setIsOpen: jest.fn()
  };

  it('should render the component correctly', () => {
    const component = render(<MobileMenu {...props} />);

    expect(component).toMatchSnapshot();
  });
});
