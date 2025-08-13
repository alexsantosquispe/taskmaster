import { render } from '@testing-library/react';
import Detail from './Detail';

describe('Detail component', () => {
  it('should render the component correctly', () => {
    const component = render(<Detail />);

    expect(component).toMatchSnapshot();
  });
});
