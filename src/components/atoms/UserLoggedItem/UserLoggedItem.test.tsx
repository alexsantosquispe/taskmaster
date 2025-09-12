import { ReduxWrapper } from '@/utils/test.utils';
import { render } from '@testing-library/react';
import UserLoggedItem from './UserLoggedItem';

describe('UserLoggedItem', () => {
  //TODO: implement tests
  it.skip('should render the component correctly', () => {
    const component = render(
      <ReduxWrapper>
        <UserLoggedItem />
      </ReduxWrapper>
    );

    expect(component).toMatchSnapshot();
  });
});
