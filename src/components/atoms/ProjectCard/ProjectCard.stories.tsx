import type { Meta, StoryObj } from '@storybook/react';

import { PROJECTS } from '@/utils/mocks/projects';
import { ProjectCard } from './ProjectCard';

const meta = {
  title: 'Atoms/ProjectCard',
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
        <ProjectCard {...proj1} />
      </div>

      <div className="flex flex-col gap-4">
        <span>Small size</span>
        <ProjectCard {...proj2} isSmall={true} />
      </div>
    </div>
  );
};

Default.args = {};
