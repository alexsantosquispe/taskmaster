import { render, screen } from '@testing-library/react';

import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('should render the component correctly', () => {
    const component = render(<Skeleton numberOfItems={7} />);

    expect(component).toMatchSnapshot();

    expect(screen.getAllByTestId('skeleton-item')).toHaveLength(7);
  });
});
