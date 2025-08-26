import type { Meta, StoryObj } from '@storybook/react';

import { ALIGNMENT_TYPES } from '@/models/types';
import { Wrapper } from '@/utils/testing/unitTest.util';
import { Button } from '../atoms/Button/Button';
import { TooltipWrapper } from './TooltipWrapper';

const meta: Meta<typeof TooltipWrapper> = {
  title: 'Atoms/TooltipWrapper',
  component: TooltipWrapper,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof TooltipWrapper>;

export const Default: Story = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <Wrapper>
        <TooltipWrapper
          tooltipMessage="Tooltip"
          tooltipAlignment={ALIGNMENT_TYPES.LEFT}
        >
          <Button
            label="Default button"
            ariaLabel="Default button"
            onClick={() => {}}
          />
        </TooltipWrapper>
      </Wrapper>

      <Wrapper>
        <TooltipWrapper tooltipMessage="Tooltip">
          <Button
            label="Default button"
            ariaLabel="Default button"
            onClick={() => {}}
          />
        </TooltipWrapper>
      </Wrapper>

      <Wrapper>
        <TooltipWrapper
          tooltipMessage="Tooltip"
          tooltipAlignment={ALIGNMENT_TYPES.BOTTOM}
        >
          <Button
            label="Default button"
            ariaLabel="Default button"
            onClick={() => {}}
          />
        </TooltipWrapper>
      </Wrapper>

      <Wrapper>
        <TooltipWrapper
          tooltipMessage="Tooltip"
          tooltipAlignment={ALIGNMENT_TYPES.RIGHT}
        >
          <Button
            label="Default button"
            ariaLabel="Default button"
            onClick={() => {}}
          />
        </TooltipWrapper>
      </Wrapper>

      <TooltipWrapper
        tooltipMessage="Tooltip"
        componentToRender={(setShowTooltip) => {
          return (
            <Wrapper className="flex flex-col gap-4">
              <span>Manual show/hide</span>
              <div className="flex gap-4">
                <Button
                  label="Show"
                  ariaLabel="Show Tooltip button"
                  isSecondary
                  onClick={() => setShowTooltip(true)}
                />
                <Button
                  label="Hide"
                  ariaLabel="Hide Tooltip button"
                  isSecondary
                  onClick={() => setShowTooltip(false)}
                />
              </div>
            </Wrapper>
          );
        }}
      />
    </div>
  );
};

Default.args = {};
