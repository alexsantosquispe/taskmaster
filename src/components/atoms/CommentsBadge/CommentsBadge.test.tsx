import { CommentsBadge } from './CommentsBadge';
import { render } from '@testing-library/react';

describe('CommentsBadge', () => {
  it('should render the component correctly', () => {
    const component = render(<CommentsBadge numberOfComments={10} />);

    expect(component).toMatchSnapshot();
  });
});
