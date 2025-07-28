import { render } from '@testing-library/react';
import { CircularProgress } from './CircularProgress';

describe('CircularProgress', () => {
  it('should render the component correctly', () => {
    const component = render(<CircularProgress percentage={0} />);

    expect(component).toMatchSnapshot();
  });
});
