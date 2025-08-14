import { Banner } from '../../components/atoms/Banner/Banner';
import { Button } from '../../components/atoms/Button/Button';
import { Skeleton } from '../../components/atoms/Skeleton/Skeleton';
import { CirclePlusIcon } from '../../icons';
import type { ProjectDTO } from '../../services/apiTypes';
import { ProjectCard } from './components/ProjectCard';
import { useProjects } from './hooks/useProjects';

const Projects = () => {
  const { projects, isLoading } = useProjects();

  return (
    <section className="flex w-full flex-col gap-8 overflow-auto md:px-4 xl:max-w-[80rem]">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Button
          label="New Project"
          onClick={() => {}}
          icon={<CirclePlusIcon />}
          ariaLabel="Create new project button"
        />
      </div>

      {isLoading && <Skeleton />}

      {!isLoading && projects?.length === 0 && (
        <Banner
          message="There aren't projects to show"
          description="Create a new project or try a different search query"
        />
      )}

      {!isLoading && (
        <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {projects?.map((project: ProjectDTO) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
      )}
    </section>
  );
};

export default Projects;
