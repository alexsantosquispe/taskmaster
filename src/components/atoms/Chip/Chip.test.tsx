import { render } from '@testing-library/react';
import { Chip } from './Chip';

describe('Chip', () => {
  it('should render the component correctly', () => {
    const component = render(<Chip label="test" />);

    expect(component).toMatchSnapshot();
  });
});
