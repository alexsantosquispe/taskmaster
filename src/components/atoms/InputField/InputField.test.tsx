import { renderWithForm } from '@/utils/testing/unitTest.util';
import { InputField } from './InputField';

describe('InputField', () => {
  const props = {
    label: 'Name',
    name: 'name',
    placeholder: 'Enter your name'
  };

  it('should render the component correctly', () => {
    const component = renderWithForm({
      componentToRender: (control) => {
        return <InputField {...props} control={control} />;
      }
    });

    expect(component).toMatchSnapshot();
  });
});
