import { fireEvent, render, screen } from '@testing-library/react';

import { CirclePlusIcon } from '@/icons';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  const onClickMock = jest.fn();
  const props = {
    ariaLabel: 'Icon button',
    icon: <CirclePlusIcon />,
    onClick: onClickMock,
    tooltipMessage: 'Tooltip message'
  };

  describe('styles', () => {
    it('should render the component correctly', () => {
      let component = render(<IconButton {...props} />);
      expect(component).toMatchSnapshot();

      component = render(<IconButton {...props} tooltipMessage="tooltip" />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    it('should check if the button is disabled', () => {
      render(<IconButton {...props} isDisable={true} />);

      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should display/hide a tooltip when the mouse hovers over the button', () => {
      render(<IconButton {...props} />);

      const iconButton = screen.getByRole('button');

      expect(iconButton).toBeInTheDocument();

      fireEvent.mouseEnter(iconButton);

      expect(screen.getByText('Tooltip message')).toBeInTheDocument();

      fireEvent.mouseLeave(iconButton);

      expect(screen.queryByText('Tooltip message')).not.toBeInTheDocument();
    });

    it('should call the onClick function when click the button', () => {
      render(<IconButton {...props} />);

      const iconButton = screen.getByRole('button');

      expect(iconButton).toBeInTheDocument();

      fireEvent.click(iconButton);

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
});
