import '@testing-library/jest-dom';

import { renderWithForm } from '@/utils/test.utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
        defaultValues: { name: '' },
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
        defaultValues: { name: '' },
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

    it('should call the onChangeText callback', async () => {
      const user = userEvent.setup();

      renderWithForm({
        defaultValues: { name: '' },
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

      await user.type(input, nameValue);

      expect(input).toHaveValue(nameValue);

      expect(onChangeMock).toHaveBeenCalledWith(nameValue);
    });

    it('should be displayed as required and the error message', () => {
      renderWithForm({
        defaultValues: { name: '' },
        componentToRender: (control) => {
          return (
            <TextAreaField
              {...props}
              control={control}
              onChangeText={onChangeMock}
              isRequired={true}
              errorMessage="This field is required"
            />
          );
        }
      });

      expect(screen.getByText('*')).toBeInTheDocument();

      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });
  });
});
