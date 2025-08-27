import type { Meta, StoryObj } from '@storybook/react';

import { ALIGNMENT_TYPES } from '@/models/types';
import { WrapperUI } from '@/utils/test.utils';
import { Button } from '../Button/Button';
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
      <WrapperUI>
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
      </WrapperUI>

      <WrapperUI>
        <TooltipWrapper tooltipMessage="Tooltip">
          <Button
            label="Default button"
            ariaLabel="Default button"
            onClick={() => {}}
          />
        </TooltipWrapper>
      </WrapperUI>

      <WrapperUI>
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
      </WrapperUI>

      <WrapperUI>
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
      </WrapperUI>

      <TooltipWrapper
        tooltipMessage="Tooltip"
        componentToRender={(setShowTooltip) => {
          return (
            <WrapperUI className="flex flex-col gap-4">
              <span>Manual show/hide</span>
              <div className="flex gap-4">
                <Button
                  label="Show"
                  ariaLabel="Show Tooltip button"
                  onClick={() => setShowTooltip(true)}
                />
                <Button
                  label="Hide"
                  ariaLabel="Hide Tooltip button"
                  onClick={() => setShowTooltip(false)}
                />
              </div>
            </WrapperUI>
          );
        }}
      />
    </div>
  );
};

Default.args = {};
