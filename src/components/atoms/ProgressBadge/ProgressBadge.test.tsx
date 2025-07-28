import { render } from '@testing-library/react';
import { ProgressBadge } from './ProgressBadge';

describe('ProgressBadge', () => {
  describe('styles', () => {
    it('should render the component correctly', () => {
      let component = render(<ProgressBadge percentage={0} />);
      expect(component).toMatchSnapshot();

      component = render(<ProgressBadge percentage={25} />);
      expect(component).toMatchSnapshot();

      component = render(<ProgressBadge percentage={60} />);
      expect(component).toMatchSnapshot();

      component = render(<ProgressBadge percentage={90} />);
      expect(component).toMatchSnapshot();
    });
  });
});
