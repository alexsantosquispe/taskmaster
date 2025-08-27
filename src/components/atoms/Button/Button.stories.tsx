import type { Meta, StoryObj } from '@storybook/react';

import { WrapperUI } from '@/utils/test.utils';
import { CirclePlusIcon } from '../../../icons';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <WrapperUI>
        <Button
          label="Default Button"
          ariaLabel="default button"
          onClick={() => {}}
        />
      </WrapperUI>

      <WrapperUI>
        <Button
          label="Button Disabled"
          ariaLabel="default Button Disabled"
          onClick={() => {}}
          isDisable={true}
        />
      </WrapperUI>

      <WrapperUI>
        <Button
          label="Secondary Button"
          ariaLabel="secondary button"
          onClick={() => {}}
          isSecondary={true}
        />
      </WrapperUI>

      <WrapperUI>
        <Button
          label="Secondary Disabled"
          ariaLabel="secondary button disabled"
          onClick={() => {}}
          isSecondary={true}
          isDisable={true}
        />
      </WrapperUI>

      <WrapperUI>
        <Button
          label="Button with Icon"
          ariaLabel="default button"
          icon={<CirclePlusIcon />}
          onClick={() => {}}
        />
      </WrapperUI>

      <WrapperUI>
        <Button
          label="Secondary with Icon"
          ariaLabel="secondary button disabled"
          onClick={() => {}}
          icon={<CirclePlusIcon />}
          isSecondary={true}
        />
      </WrapperUI>
    </div>
  );
};

Default.args = {};
