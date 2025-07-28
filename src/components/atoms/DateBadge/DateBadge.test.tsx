import { DateBadge } from './DateBadge';
import { render } from '@testing-library/react';

describe('DateBadge', () => {
  it('should render the component correctly', () => {
    const component = render(<DateBadge date="2025-07-05T14:13:00-04:00" />);

    expect(component).toMatchSnapshot();
  });
});
