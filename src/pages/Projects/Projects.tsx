import { Banner } from '@/components/atoms/Banner/Banner';
import { Skeleton } from '@/components/atoms/Skeleton/Skeleton';
import { ProjectCard } from '@/components/molecules/ProjectCard/ProjectCard';
import type { ProjectDTO } from '@/services/apiTypes';
import { useState } from 'react';
import { ProjectsHeader } from './components/ProjectsHeader';
import { useProjects } from './hooks/useProjects';

const projectGridStyles =
  'grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4';

const Projects = () => {
  const [searchValue, setSearchValue] = useState('');
  const { projects, isLoading } = useProjects(searchValue);

  return (
    <section className="flex w-full flex-col gap-8 overflow-auto px-4 md:px-0 xl:max-w-[var(--width-large-screen)]">
      <ProjectsHeader onSearchCallback={setSearchValue} />

      {isLoading && <Skeleton />}

      {!isLoading && projects?.length === 0 && (
        <Banner
          message="There aren't projects to show"
          description="Create a new project or try a different search query"
        />
      )}

      {!isLoading && (
        <div className={projectGridStyles}>
          {projects?.map((project: ProjectDTO) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
