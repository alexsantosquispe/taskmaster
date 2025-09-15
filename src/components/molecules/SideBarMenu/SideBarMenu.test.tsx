import '@testing-library/jest-dom';

import { ReduxWrapper, TestWrapper } from '@/utils/test.utils';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SIDE_BAR_ITEMS, SideBarMenu } from './SideBarMenu';

import { useIsMobile } from '@/hooks/useIsMobile';

jest.mock('../../../hooks/useIsMobile', () => ({
  useIsMobile: jest.fn()
}));

describe('SideBarMenu', () => {
  const sideBarItemsLength = SIDE_BAR_ITEMS.length;

  describe('styles', () => {
    it('should render the component correctly expanded/collapsed', () => {
      const component = render(
        <TestWrapper>
          <ReduxWrapper>
            <SideBarMenu />
          </ReduxWrapper>
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

  describe('MobileMenu', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should render the component correctly for mobile screens', async () => {
      (useIsMobile as jest.Mock).mockReturnValue(true);

      const component = render(
        <TestWrapper>
          <ReduxWrapper>
            <SideBarMenu />
          </ReduxWrapper>
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
          <ReduxWrapper>
            <SideBarMenu />
          </ReduxWrapper>
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
