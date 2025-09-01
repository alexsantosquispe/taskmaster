import { TestWrapper } from '@/utils/test.utils';
import { render } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';

const BREADCRUMBS = [
  {
    id: 'projects',
    label: 'Projects',
    href: ''
  },
  {
    id: 'taskmaster-mobile-app',
    label: 'TaskMaster Mobile App',
    href: ''
  }
];

describe('Breadcrumb', () => {
  it('should render the component correctly', () => {
    const component = render(
      <TestWrapper>
        <Breadcrumb items={BREADCRUMBS} />
      </TestWrapper>
    );

    expect(component).toMatchSnapshot();
  });
});
