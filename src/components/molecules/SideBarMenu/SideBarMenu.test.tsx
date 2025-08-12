import '@testing-library/jest-dom';

import { FOOTER_ITEMS, SIDE_BAR_ITEMS, SideBarMenu } from './SideBarMenu';
import { fireEvent, render, screen } from '@testing-library/react';

import { TestWrapper } from '../../../utils/unitTest.util';

describe('SideBarMenu', () => {
  const sideBarItemsLength = SIDE_BAR_ITEMS.length + FOOTER_ITEMS.length;
  const sideBarItemsWithSubItemsLength =
    sideBarItemsLength + (SIDE_BAR_ITEMS[1].subItems?.length || 0);

  describe('styles', () => {
    it('should render the component correctly expanded/collapsed', () => {
      const component = render(
        <TestWrapper>
          <SideBarMenu />
        </TestWrapper>
      );

      expect(component).toMatchSnapshot();

      const items = screen.getAllByRole('listitem');

      expect(items).toHaveLength(sideBarItemsLength);

      const collapseButton = screen.getByTestId('collapse-icon');

      expect(collapseButton).toBeInTheDocument();

      fireEvent.click(collapseButton);

      expect(collapseButton).not.toBeInTheDocument();

      const expandButton = screen.getByTestId('expand-icon');

      expect(expandButton).toBeInTheDocument();
    });
  });

  describe('behavior', () => {
    beforeEach(() => {
      render(
        <TestWrapper>
          <SideBarMenu />
        </TestWrapper>
      );
    });

    it('should expand the subitems of projects item', () => {
      const item = screen.getByRole('link', {
        name: SIDE_BAR_ITEMS[1].label
      });

      const listItems = screen.getAllByRole('listitem');

      expect(listItems).toHaveLength(sideBarItemsLength);

      fireEvent.click(item);

      expect(screen.getAllByRole('listitem')).toHaveLength(
        sideBarItemsWithSubItemsLength
      );
    });

    it('should select a subitem', () => {
      const activeClasses =
        'bg-black/10 text-blue-700 md:bg-neutral-100 dark:bg-white/5 dark:text-orange-500';

      const item = screen.getByRole('link', {
        name: SIDE_BAR_ITEMS[1].label
      });

      fireEvent.click(item);

      expect(screen.getAllByRole('listitem')).toHaveLength(
        sideBarItemsWithSubItemsLength
      );

      const subItem = screen.getByRole('link', {
        name: SIDE_BAR_ITEMS[1].subItems?.[0].label
      });

      expect(subItem).toBeInTheDocument();

      expect(subItem).not.toHaveClass(activeClasses);

      fireEvent.click(subItem);

      expect(subItem).toHaveClass(activeClasses);
    });
  });
});
