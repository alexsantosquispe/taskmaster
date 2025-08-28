import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import TabBar from './TabBar';

const TABS = [
  {
    id: '1',
    label: 'Board'
  },
  {
    id: '2',
    label: 'To-Do'
  }
];

describe('TabBar', () => {
  describe('styles', () => {
    it('should render the component correctly', () => {
      const component = render(<TabBar tabs={TABS} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    const selectedTabStyles =
      'dark:bg-primary text-primary bg-white shadow dark:text-white';
    it('should change between tabs', () => {
      render(<TabBar tabs={TABS} />);

      const tabs = screen.getAllByRole('button');
      expect(tabs.length).toBe(TABS.length);

      expect(tabs[0]).toHaveClass(selectedTabStyles);
      expect(tabs[1]).not.toHaveClass(selectedTabStyles);

      fireEvent.click(tabs[1]);

      expect(tabs[0]).not.toHaveClass(selectedTabStyles);
      expect(tabs[1]).toHaveClass(selectedTabStyles);
    });
  });
});
