import type { Meta, StoryObj } from '@storybook/react';

import { Wrapper } from '@/utils/testing/unitTest.util';
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
      <Wrapper>
        <Button
          label="Default Button"
          ariaLabel="default button"
          onClick={() => {}}
        />
      </Wrapper>

      <Wrapper>
        <Button
          label="Button Disabled"
          ariaLabel="default Button Disabled"
          onClick={() => {}}
          isDisable={true}
        />
      </Wrapper>

      <Wrapper>
        <Button
          label="Secondary Button"
          ariaLabel="secondary button"
          onClick={() => {}}
          isSecondary={true}
        />
      </Wrapper>

      <Wrapper>
        <Button
          label="Secondary Disabled"
          ariaLabel="secondary button disabled"
          onClick={() => {}}
          isSecondary={true}
          isDisable={true}
        />
      </Wrapper>

      <Wrapper>
        <Button
          label="Button with Icon"
          ariaLabel="default button"
          icon={<CirclePlusIcon />}
          onClick={() => {}}
        />
      </Wrapper>

      <Wrapper>
        <Button
          label="Secondary with Icon"
          ariaLabel="secondary button disabled"
          onClick={() => {}}
          icon={<CirclePlusIcon />}
          isSecondary={true}
        />
      </Wrapper>
    </div>
  );
};

Default.args = {};
