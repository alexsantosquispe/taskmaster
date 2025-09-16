import type { Meta, StoryObj } from '@storybook/react';

import { WrapperUI } from '@/utils/test.utils';
import SearchBar from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Atoms/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = () => {
  return (
    <WrapperUI>
      <SearchBar
        onSearchCallback={(value) => alert(value)}
        placeholder="Enter a value"
      />
    </WrapperUI>
  );
};

Default.args = {};
