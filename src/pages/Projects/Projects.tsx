import { Banner } from '@/components/atoms/Banner/Banner';
import { ProjectCard } from '@/components/atoms/ProjectCard/ProjectCard';
import { Skeleton } from '@/components/atoms/Skeleton/Skeleton';
import type { ProjectDTO } from '@/services/apiTypes';
import { ProjectsHeader } from './components/ProjectsHeader';
import { useProjects } from './hooks/useProjects';

const projectGridStyles =
  'grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4';

const Projects = () => {
  const { projects, isLoading } = useProjects();

  return (
    <section className="flex w-full flex-col gap-8 overflow-auto md:px-4 xl:max-w-[80rem]">
      <ProjectsHeader />

      {isLoading && <Skeleton />}

      {!isLoading && projects?.length === 0 && (
        <Banner
          message="There aren't projects to show"
          description="Create a new project or try a different search query"
        />
      )}

      {!isLoading && (
        <div className={projectGridStyles}>
          {projects?.map((project: ProjectDTO) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
      )}
    </section>
  );
};

export default Projects;
