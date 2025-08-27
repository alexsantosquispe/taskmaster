import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeProvider } from '../../../contexts/ThemeProvider';
import SwitchThemeButton from './SwitchThemeButton';

describe('SwitchThemeButton', () => {
  describe('styles', () => {
    it('should render the component correctly', () => {
      let component = render(
        <ThemeProvider>
          <SwitchThemeButton />
        </ThemeProvider>
      );
      expect(component).toMatchSnapshot();

      component = render(
        <ThemeProvider>
          <SwitchThemeButton isCollapsed={true} />
        </ThemeProvider>
      );
      expect(component).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    const selectedItemStyles =
      'dark:bg-primary text-primary bg-white shadow dark:text-white';
    it('should change between tabs and check the styles are correct', () => {
      render(
        <ThemeProvider>
          <SwitchThemeButton />
        </ThemeProvider>
      );

      const systemButton = screen.getByRole('button', { name: 'System' });
      const lightButton = screen.getByRole('button', { name: 'Light' });
      const darkButton = screen.getByRole('button', { name: 'Dark' });

      expect(systemButton).toHaveClass(selectedItemStyles);
      expect(lightButton).not.toHaveClass(selectedItemStyles);
      expect(darkButton).not.toHaveClass(selectedItemStyles);

      fireEvent.click(lightButton);
      expect(lightButton).toHaveClass(selectedItemStyles);
      expect(systemButton).not.toHaveClass(selectedItemStyles);
      expect(darkButton).not.toHaveClass(selectedItemStyles);

      fireEvent.click(darkButton);
      expect(darkButton).toHaveClass(selectedItemStyles);
      expect(systemButton).not.toHaveClass(selectedItemStyles);
      expect(lightButton).not.toHaveClass(selectedItemStyles);
    });
  });
});
