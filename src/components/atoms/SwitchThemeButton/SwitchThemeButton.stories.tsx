import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '../../../contexts/ThemeProvider';
import SwitchThemeButton from './SwitchThemeButton';

const meta = {
  title: 'Atoms/SwitchThemeButton',
  component: SwitchThemeButton,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof SwitchThemeButton>;

export default meta;

type Story = StoryObj<typeof SwitchThemeButton>;

export const Default: Story = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col gap-4">
        <SwitchThemeButton />
        <SwitchThemeButton isCollapsed={true} />
      </div>
    </ThemeProvider>
  );
};

Default.args = {};
