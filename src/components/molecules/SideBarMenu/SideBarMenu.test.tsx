import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { FOOTER_ITEMS, SIDE_BAR_ITEMS, SideBarMenu } from './SideBarMenu';

import { ThemeProvider } from '../../../contexts/ThemeProvider';

describe('SideBarMenu', () => {
  const sideBarItemsLength = SIDE_BAR_ITEMS.length + FOOTER_ITEMS.length;
  const sideBarItemsWithSubItemsLength =
    sideBarItemsLength + (SIDE_BAR_ITEMS[1].subItems?.length || 0);

  describe('styles', () => {
    it('should render the component correctly', () => {
      const component = render(
        <ThemeProvider>
          <SideBarMenu />
        </ThemeProvider>
      );

      expect(component).toMatchSnapshot();

      const items = screen.getAllByRole('listitem');

      expect(items).toHaveLength(sideBarItemsLength);
    });
  });

  describe('behavior', () => {
    beforeEach(() => {
      render(
        <ThemeProvider>
          <SideBarMenu />
        </ThemeProvider>
      );
    });

    it('should expand the subitems of projects item', () => {
      const item = screen.getByRole('button', {
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
        'bg-neutral-100 text-blue-700 dark:bg-white/5 dark:text-orange-500';
      const item = screen.getByRole('button', {
        name: SIDE_BAR_ITEMS[1].label
      });

      fireEvent.click(item);

      expect(screen.getAllByRole('listitem')).toHaveLength(
        sideBarItemsWithSubItemsLength
      );

      const subItem = screen.getByRole('button', {
        name: SIDE_BAR_ITEMS[1].subItems?.[0].label
      });

      expect(subItem).toBeInTheDocument();

      expect(subItem).not.toHaveClass(activeClasses);

      fireEvent.click(subItem);

      expect(subItem).toHaveClass(activeClasses);
    });
  });
});
