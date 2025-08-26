import { render } from '@testing-library/react';
import { CirclePlusIcon } from '../../../icons';
import { Button } from './Button';

describe('Button', () => {
  const onClickMock = jest.fn();
  const props = {
    label: 'Test button',
    onClick: onClickMock,
    ariaLabel: 'test button'
  };

  it('should render the button correctly', () => {
    let component = render(<Button {...props} />);
    expect(component).toMatchSnapshot();

    component = render(<Button {...props} isDisable={true} />);
    expect(component).toMatchSnapshot();

    component = render(<Button {...props} isSecondary={true} />);
    expect(component).toMatchSnapshot();

    component = render(
      <Button {...props} isSecondary={true} isDisable={true} />
    );
    expect(component).toMatchSnapshot();

    component = render(<Button {...props} isLoading={true} />);
    expect(component).toMatchSnapshot();
  });

  it('should render the button with icon correctly', () => {
    let component = render(<Button {...props} icon={<CirclePlusIcon />} />);
    expect(component).toMatchSnapshot();

    component = render(
      <Button {...props} icon={<CirclePlusIcon />} isSecondary={true} />
    );
    expect(component).toMatchSnapshot();
  });
});
