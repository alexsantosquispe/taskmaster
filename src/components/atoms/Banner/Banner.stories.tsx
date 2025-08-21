import type { Meta, StoryObj } from '@storybook/react';

import { Banner } from './Banner';

const meta = {
  title: 'Atoms/Banner',
  component: Banner
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = () => {
  return <Banner message="test" description="Lorem ipsum dolor sit amet" />;
};

Default.args = {};
