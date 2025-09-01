import { TestWrapper } from '@/utils/test.utils';
import { render } from '@testing-library/react';
import Detail from './Detail';

describe('Detail component', () => {
  it('should render the component correctly', () => {
    const component = render(
      <TestWrapper>
        <Detail />
      </TestWrapper>
    );

    expect(component).toMatchSnapshot();
  });
});
