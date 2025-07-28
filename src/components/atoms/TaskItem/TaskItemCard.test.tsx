import { render } from '@testing-library/react';
import { BACKLOG_TASKS } from '../../../utils/data/mocks';
import { TaskItemCard, type TaskItemCardProps } from './TaskItemCard';

describe('TaskItemCard', () => {
  const props: TaskItemCardProps = BACKLOG_TASKS[0];
  it('should render the component correctly', () => {
    const component = render(<TaskItemCard {...props} />);

    expect(component).toMatchSnapshot();
  });
});
