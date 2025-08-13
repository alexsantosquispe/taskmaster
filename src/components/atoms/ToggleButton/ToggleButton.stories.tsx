import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { CollapseIcon, ExpandIcon } from '../../../icons';
import { ToggleButton } from './ToggleButton';

const meta = {
  title: 'Atoms/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <ToggleButton
      isCollapsed={isCollapsed}
      setIsCollapsed={setIsCollapsed}
      expandIcon={<ExpandIcon />}
      collapseIcon={<CollapseIcon />}
    />
  );
};

Default.args = {};
