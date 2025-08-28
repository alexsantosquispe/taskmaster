import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { TOAST_TYPES } from '@/models/types';
import { Toast } from './Toast';

describe('Toast', () => {
  const onRemoveMock = jest.fn();
  const props = {
    id: 'test',
    title: 'test',
    message: 'test',
    onRemove: onRemoveMock
  };

  describe('styles', () => {
    it('should render the component correctly default, error, and success types', () => {
      let component = render(<Toast {...props} />);
      expect(component).toMatchSnapshot();

      component = render(<Toast {...props} type={TOAST_TYPES.SUCCESS} />);
      expect(component).toMatchSnapshot();

      component = render(<Toast {...props} type={TOAST_TYPES.ERROR} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    it('should remove toast on close button click', () => {
      render(<Toast {...props} />);

      const closeButton = screen.getByRole('button');

      expect(closeButton).toBeInTheDocument();

      fireEvent.click(closeButton);

      expect(onRemoveMock).toHaveBeenCalledTimes(1);
    });

    it('should remove toast after duration', () => {
      render(<Toast {...props} duration={1000} />);

      expect(screen.getByRole('button')).toBeInTheDocument();

      expect(onRemoveMock).toHaveBeenCalledTimes(1);
    });
  });
});
