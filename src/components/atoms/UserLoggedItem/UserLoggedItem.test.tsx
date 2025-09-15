import { ReduxWrapper, TestWrapper } from '@/utils/test.utils';

import { render } from '@testing-library/react';
import UserLoggedItem from './UserLoggedItem';

describe('UserLoggedItem', () => {
  it('should render the component correctly', () => {
    const component = render(
      <TestWrapper>
        <ReduxWrapper>
          <UserLoggedItem />
        </ReduxWrapper>
      </TestWrapper>
    );

    expect(component).toMatchSnapshot();
  });
});
