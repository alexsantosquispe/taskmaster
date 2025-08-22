import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';

import { renderWithForm } from '@/utils/testing/unitTest.util';
import { TextAreaField } from './TextAreaField';

describe('TextAreaField', () => {
  const props = {
    label: 'Description',
    name: 'description',
    placeholder: 'Enter text...'
  };

  describe('styles', () => {
    it('should render the component correctly', () => {
      const component = renderWithForm({
        componentToRender: (control) => {
          return <TextAreaField {...props} control={control} />;
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
    it('should check if the textarea is disabled', () => {
      renderWithForm({
        componentToRender: (control) => {
          return (
            <TextAreaField {...props} control={control} isDisabled={true} />
          );
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
            <TextAreaField
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
