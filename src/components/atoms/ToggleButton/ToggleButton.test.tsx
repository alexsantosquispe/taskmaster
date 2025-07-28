import { fireEvent, render, screen } from '@testing-library/react';
import { CollapseIcon, ExpandIcon } from '../../../icons';

import { ToggleButton } from './ToggleButton';

describe('ToggleButton', () => {
  const setIsCollapsedMock = jest.fn();
  const props = {
    isCollapsed: false,
    setIsCollapsed: setIsCollapsedMock,
    expandIcon: <ExpandIcon />,
    collapseIcon: <CollapseIcon />
  };

  it('should render the component correctly', () => {
    let component = render(<ToggleButton {...props} />);
    expect(component).toMatchSnapshot();

    component = render(<ToggleButton {...props} isCollapsed={true} />);
    expect(component).toMatchSnapshot();
  });

  it('should toggle between icons', () => {
    render(<ToggleButton {...props} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(setIsCollapsedMock).toHaveBeenCalledTimes(1);
    expect(setIsCollapsedMock).toHaveBeenCalledWith(true);
  });
});
