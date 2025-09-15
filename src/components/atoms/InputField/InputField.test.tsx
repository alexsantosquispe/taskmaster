import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';

import { renderWithForm } from '@/utils/test.utils';
import userEvent from '@testing-library/user-event';
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
        defaultValues: { name: '' },
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
        defaultValues: { name: '' },
        componentToRender: (control) => {
          return <InputField {...props} control={control} isDisabled={true} />;
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
            <InputField
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

    it('should sho/hide password type field', () => {
      renderWithForm({
        defaultValues: { name: '' },
        componentToRender: (control) => {
          return (
            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              control={control}
            />
          );
        }
      });

      const input = screen.getByPlaceholderText('Enter your password');

      expect(input).toHaveAttribute('type', 'password');

      const toggleButton = screen.getByRole('button', {
        name: 'Show password'
      });

      expect(toggleButton).toBeInTheDocument();

      fireEvent.click(toggleButton);

      expect(input).toHaveAttribute('type', 'text');

      expect(toggleButton).toHaveAttribute('aria-label', 'Hide password');
    });
  });
});
