import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { Modal } from './Modal';

describe('Modal', () => {
  const onCloseMock = jest.fn();
  const props = {
    title: 'Modal',
    onClose: onCloseMock
  };

  it('should render the modal', () => {
    const component = render(
      <Modal {...props}>
        <div>Modal content</div>
      </Modal>
    );

    expect(component).toMatchSnapshot();

    expect(screen.getByText('Modal')).toBeInTheDocument();
  });

  describe('behavior', () => {
    it('should close the modal when click the close button', () => {
      render(
        <Modal {...props}>
          <div>Modal content</div>
        </Modal>
      );

      const closeButton = screen.getByRole('button');

      expect(closeButton).toBeInTheDocument();

      fireEvent.click(closeButton);

      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
  });
});
