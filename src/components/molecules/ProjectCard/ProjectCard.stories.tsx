import type { Meta, StoryObj } from '@storybook/react';

import { PROJECTS } from '@/utils/mocks/projects';
import { TestWrapper } from '@/utils/wrappers.utils';
import { ProjectCard } from './ProjectCard';

const meta = {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = () => {
  const proj1 = { ...PROJECTS[0] };
  const proj2 = { ...PROJECTS[1] };

  return (
    <div className="grid grid-cols-2 gap-16">
      <div className="flex flex-col gap-4">
        <span>Regular size</span>
        <TestWrapper>
          <ProjectCard {...proj1} />
        </TestWrapper>
      </div>

      <div className="flex flex-col gap-4">
        <span>Small size</span>
        <TestWrapper>
          <ProjectCard {...proj2} isSmall={true} />
        </TestWrapper>
      </div>
    </div>
  );
};

Default.args = {};
