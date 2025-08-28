import '@testing-library/jest-dom';

import { ReduxWrapper, ToastWrapper } from '@/utils/test.utils';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { PROJECT_MENU_OPTIONS } from '@/constants';
import { PROJECTS } from '@/utils/mocks/projects';
import { ProjectCardContextMenu } from './ProjectCardContextMenu';

describe('ProjectCardContextMenu', () => {
  const props = {
    projectItem: PROJECTS[0]
  };

  describe('styles', () => {
    it('should render the component correctly', () => {
      let component = render(
        <ReduxWrapper>
          <ToastWrapper>
            <ProjectCardContextMenu {...props} />
          </ToastWrapper>
        </ReduxWrapper>
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    beforeEach(() => {
      render(
        <ReduxWrapper>
          <ToastWrapper>
            <ProjectCardContextMenu {...props} />
          </ToastWrapper>
        </ReduxWrapper>
      );
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

    it('should hide the context menu when select an option and open the edit modal', async () => {
      const optionsButton = screen.getByRole('button');
      fireEvent.click(optionsButton);

      expect(screen.getByTestId('context-menu')).toBeInTheDocument();

      const editOption = screen.getByText(PROJECT_MENU_OPTIONS[0].label);
      fireEvent.click(editOption);

      await waitFor(() => {
        expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument();
      });

      expect(await screen.findByTestId('modal')).toBeInTheDocument();

      expect(await screen.findByText('Edit project')).toBeInTheDocument();

      const closeModalButton = screen.getByRole('button', {
        name: 'Close modal button'
      });
      fireEvent.click(closeModalButton);

      await waitFor(() => {
        expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
      });
    });

    it('should hide the context menu when select an option and open the delete modal', async () => {
      const optionsButton = screen.getByRole('button');
      fireEvent.click(optionsButton);

      expect(screen.getByTestId('context-menu')).toBeInTheDocument();

      const deleteOption = screen.getByText(PROJECT_MENU_OPTIONS[1].label);
      fireEvent.click(deleteOption);

      await waitFor(() => {
        expect(screen.queryByTestId('context-menu')).not.toBeInTheDocument();
      });

      expect(await screen.findByTestId('modal')).toBeInTheDocument();

      expect(
        await screen.findByText('Are you sure you want to delete this project?')
      ).toBeInTheDocument();

      const closeModalButton = screen.getByRole('button', {
        name: 'Close modal button'
      });
      fireEvent.click(closeModalButton);

      await waitFor(() => {
        expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
      });
    });
  });
});
