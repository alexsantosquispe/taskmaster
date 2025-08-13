import type { Meta, StoryObj } from '@storybook/react';

import type { ReactNode } from 'react';
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

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center rounded border border-neutral-400 p-8">
      {children}
    </div>
  );
};

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
    </div>
  );
};

Default.args = {};
