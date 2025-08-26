import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import type { Option } from '@/models/types';
import { ContextMenu } from './ContextMenu';

const options: Option[] = [
  { label: 'Edit', value: 'edit' },
  { label: 'Delete', value: 'delete' },
  { label: 'Archive', value: 'archive' },
  { label: 'Unarchive', value: 'unarchive' }
];

describe('ContextMenu', () => {
  const onSelectOptionMock = jest.fn();
  const props = {
    ariaLabel: 'test',
    options,
    onSelectOption: onSelectOptionMock,
    label: 'Menu'
  };

  describe('styles', () => {
    it('should render the context menu correctly', () => {
      const component = render(<ContextMenu {...props} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    beforeEach(() => {
      render(
        <div data-testid="main-wrapper">
          <ContextMenu {...props} />
        </div>
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should display the menu options when click the menu button', () => {
      const menuButton = screen.getByText('Menu');

      expect(menuButton).toBeInTheDocument();

      fireEvent.click(menuButton);

      expect(screen.getByTestId('context-menu')).toBeInTheDocument();

      const menuItem = screen.getAllByRole('listitem');

      expect(menuItem).toHaveLength(options.length);
    });

    it('should hide the menu options when select and option', () => {
      fireEvent.click(screen.getByText('Menu'));

      expect(screen.getByTestId('context-menu')).toBeInTheDocument();

      const option = screen.getByText('Edit');

      fireEvent.click(option);

      expect(onSelectOptionMock).toHaveBeenCalledTimes(1);

      expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument();
    });

    it('should hide the menu options when click the menu button again', () => {
      fireEvent.click(screen.getByText('Menu'));

      expect(screen.getByTestId('context-menu')).toBeInTheDocument();

      fireEvent.click(screen.getByText('Menu'));

      expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument();
    });

    it('should hide when click outside the menu', () => {
      fireEvent.click(screen.getByText('Menu'));

      expect(screen.getByTestId('context-menu')).toBeInTheDocument();

      fireEvent.mouseDown(document.body);

      expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument();
    });
  });
});
