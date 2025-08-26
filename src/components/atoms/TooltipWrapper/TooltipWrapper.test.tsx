import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { TooltipWrapper } from './TooltipWrapper';

describe('TooltipWrapper', () => {
  describe('styles', () => {
    it('should render the component correctly', () => {
      let component = render(
        <TooltipWrapper tooltipMessage="Tooltip">
          <div>Test</div>
        </TooltipWrapper>
      );

      expect(component).toMatchSnapshot();

      component = render(
        <TooltipWrapper
          tooltipMessage="Tooltip"
          componentToRender={() => <div>Test 2</div>}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    it('should show/hide the tooltip on hover/leave', () => {
      render(
        <TooltipWrapper tooltipMessage="Tooltip">
          <div>Test</div>
        </TooltipWrapper>
      );

      const childComponent = screen.getByText('Test');

      expect(childComponent).toBeInTheDocument();

      fireEvent.mouseEnter(childComponent);

      expect(screen.getByText('Tooltip')).toBeInTheDocument();

      fireEvent.mouseLeave(childComponent);

      expect(screen.queryByText('Tooltip')).not.toBeInTheDocument();
    });

    it('should show/hide the tooltip manually', () => {
      render(
        <TooltipWrapper
          tooltipMessage="Manual Tooltip"
          componentToRender={(setShowTooltip) => {
            return (
              <>
                <div>Component</div>
                <button onClick={() => setShowTooltip(true)}>
                  Show Tooltip
                </button>
                <button onClick={() => setShowTooltip(false)}>
                  Hide Tooltip
                </button>
              </>
            );
          }}
        />
      );

      const childComponent = screen.getByText('Component');
      const showButton = screen.getByText('Show Tooltip');
      const hideButton = screen.getByText('Hide Tooltip');

      expect(childComponent).toBeInTheDocument();
      expect(showButton).toBeInTheDocument();
      expect(hideButton).toBeInTheDocument();

      fireEvent.click(showButton);

      expect(screen.getByText('Manual Tooltip')).toBeInTheDocument();

      fireEvent.click(hideButton);

      expect(screen.queryByText('Manual Tooltip')).not.toBeInTheDocument();
    });
  });
});
