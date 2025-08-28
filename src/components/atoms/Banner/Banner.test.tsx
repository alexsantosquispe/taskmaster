import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Banner } from './Banner';

describe('Banner', () => {
  it('should render the component correctly', () => {
    const component = render(
      <Banner message="test" description="description" />
    );

    expect(component).toMatchSnapshot();

    const title = screen.getByText('test');
    const description = screen.getByText('description');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
