import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { PROJECT_MENU_OPTIONS } from '@/constants';
import { ProjectCardContextMenu } from './ProjectCardContextMenu';

describe('ProjectCardContextMenu', () => {
  describe('styles', () => {
    it('should render the component correctly', () => {
      let component = render(<ProjectCardContextMenu />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    beforeEach(() => {
      render(<ProjectCardContextMenu />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should open the context menu when click the button', () => {
      const optionsButton = screen.getByRole('button');

      fireEvent.click(optionsButton);

      expect(screen.getByTestId('context-menu')).toBeInTheDocument();

      expect(screen.getAllByRole('listitem')).toHaveLength(
        PROJECT_MENU_OPTIONS.length
      );
    });

    it('should hide the context menu when select an option and open the edit modal', () => {
      const optionsButton = screen.getByRole('button');

      fireEvent.click(optionsButton);

      expect(screen.getByTestId('context-menu')).toBeInTheDocument();

      const editOption = screen.getByText(PROJECT_MENU_OPTIONS[0].label);

      fireEvent.click(editOption);

      expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument();

      expect(screen.getByTestId('modal')).toBeInTheDocument();

      expect(screen.getByText('Edit project')).toBeInTheDocument();

      const closeModalButton = screen.getByRole('button', {
        name: 'Close modal button'
      });

      expect(closeModalButton).toBeInTheDocument();

      fireEvent.click(closeModalButton);

      expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    });

    it('should hide the context menu when select an option and open the delete modal', () => {
      const optionsButton = screen.getByRole('button');

      fireEvent.click(optionsButton);

      expect(screen.getByTestId('context-menu')).toBeInTheDocument();

      const deleteOption = screen.getByText(PROJECT_MENU_OPTIONS[1].label);

      fireEvent.click(deleteOption);

      expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument();

      expect(screen.getByTestId('modal')).toBeInTheDocument();

      expect(screen.getByText('Delete project')).toBeInTheDocument();

      const closeModalButton = screen.getByRole('button', {
        name: 'Close modal button'
      });

      expect(closeModalButton).toBeInTheDocument();

      fireEvent.click(closeModalButton);

      expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    });
  });
});
