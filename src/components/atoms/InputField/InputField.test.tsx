import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';

import { renderWithForm } from '@/utils/testing/unitTest.util';
import { InputField } from './InputField';

describe('InputField', () => {
  const props = {
    label: 'Name',
    name: 'name',
    placeholder: 'Enter your name'
  };

  describe('styles', () => {
    it('should render the component correctly', () => {
      const component = renderWithForm({
        componentToRender: (control) => {
          return <InputField {...props} control={control} />;
        }
      });

      expect(component).toMatchSnapshot();

      expect(screen.getByText(props.label)).toBeInTheDocument();

      expect(
        screen.getByPlaceholderText(props.placeholder)
      ).toBeInTheDocument();
    });
  });

  describe('behavior', () => {
    const onChangeMock = jest.fn();
    const nameValue = 'John Doe';

    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('should check if the input is disabled', () => {
      renderWithForm({
        componentToRender: (control) => {
          return <InputField {...props} control={control} isDisabled={true} />;
        }
      });

      const input = screen.getByRole('textbox');

      expect(input).toBeInTheDocument();

      expect(input).toBeDisabled();
    });

    it('should call the onChangeText callback', () => {
      renderWithForm({
        componentToRender: (control) => {
          return (
            <InputField
              {...props}
              control={control}
              onChangeText={onChangeMock}
            />
          );
        }
      });

      const input = screen.getByRole('textbox');

      fireEvent.change(input, { target: { value: nameValue } });

      expect(input).toHaveValue(nameValue);

      expect(onChangeMock).toHaveBeenCalledTimes(1);

      expect(onChangeMock).toHaveBeenCalledWith(nameValue);
    });
  });
});
