import { render } from '@testing-library/react';
import { ThemeProvider } from '../../../contexts/ThemeProvider';
import { SideBarMenu } from './SideBarMenu';

describe('SideBarMenu', () => {
  it('should render the component correctly', () => {
    const component = render(
      <ThemeProvider>
        <SideBarMenu />
      </ThemeProvider>
    );

    expect(component).toMatchSnapshot();
  });
});
