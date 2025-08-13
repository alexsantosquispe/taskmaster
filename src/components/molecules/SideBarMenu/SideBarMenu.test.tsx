import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { FOOTER_ITEMS, SIDE_BAR_ITEMS, SideBarMenu } from './SideBarMenu';

import { useIsMobile } from '../../../hooks/useIsMobile';
import { TestWrapper } from '../../../utils/unitTest.util';

jest.mock('../../../hooks/useIsMobile', () => ({
  useIsMobile: jest.fn()
}));

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

  describe('MobileMenu', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should render the component correctly for mobile screens', async () => {
      (useIsMobile as jest.Mock).mockReturnValue(true);

      const component = render(
        <TestWrapper>
          <SideBarMenu />
        </TestWrapper>
      );

      expect(component).toMatchSnapshot();

      const menuIcon = screen.getByTestId('mobile-menu');

      expect(menuIcon).toBeInTheDocument();

      fireEvent.click(menuIcon);

      waitFor(() => {
        const closeIcon = screen.getByTestId('close-menu');

        expect(closeIcon).toBeInTheDocument();

        const items = screen.getAllByRole('listitem');

        expect(items).toHaveLength(SIDE_BAR_ITEMS.length);
      });
    });

    it('should select an option and the menu should be closed', async () => {
      (useIsMobile as jest.Mock).mockReturnValue(true);

      render(
        <TestWrapper>
          <SideBarMenu />
        </TestWrapper>
      );

      const menuIcon = screen.getByTestId('mobile-menu');

      expect(menuIcon).toBeInTheDocument();

      fireEvent.click(menuIcon);

      waitFor(() => {
        const closeIcon = screen.getByTestId('close-menu');

        expect(closeIcon).toBeInTheDocument();

        const items = screen.getAllByRole('link');

        expect(items).toHaveLength(SIDE_BAR_ITEMS.length);

        fireEvent.click(items[0]);

        expect(closeIcon).not.toBeInTheDocument();
      });
    });
  });
});
