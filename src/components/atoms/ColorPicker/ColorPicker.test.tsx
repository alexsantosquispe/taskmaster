import { fireEvent, render, screen } from '@testing-library/react';
import { ColorPicker, ColorPickerWithController } from './ColorPicker';

import { COLORS } from '@/constants';
import type { ColorPickerProps } from '@/models/types';
import { useForm } from 'react-hook-form';

const ColorPickerWrapperController = (props: ColorPickerProps) => {
  const { control } = useForm();
  return (
    <ColorPickerWithController {...props} name="color" control={control} />
  );
};

describe('ColorPicker', () => {
  const onChangeColorMock = jest.fn();
  const props = {
    label: 'Color picker',
    onChangeColor: onChangeColorMock
  };

  describe('styles', () => {
    it('should render the color picker correctly', () => {
      const component = render(<ColorPicker {...props} />);

      expect(component).toMatchSnapshot();
    });

    it('should render the color picker with controller correctly', () => {
      const component = render(<ColorPickerWrapperController {...props} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    const numberOfColorButtons = COLORS.length + 1;
    const redColor = COLORS[5];

    it('should open the pallet color available and pick one', () => {
      render(<ColorPicker {...props} />);

      const button = screen.getByRole('button');

      fireEvent.click(button);

      const colorPallet = screen.getByTestId('color-pallet');

      expect(colorPallet).toBeInTheDocument();

      expect(screen.getAllByRole('button')).toHaveLength(numberOfColorButtons);

      const colorToSelect = screen.getByRole('button', {
        name: `Color code ${redColor.label}`
      });

      fireEvent.click(colorToSelect);

      expect(onChangeColorMock).toHaveBeenCalledTimes(1);

      expect(onChangeColorMock).toHaveBeenCalledWith(redColor);
    });
  });
});
