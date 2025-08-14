import { Banner } from '../../components/atoms/Banner/Banner';
import { Button } from '../../components/atoms/Button/Button';
import { Skeleton } from '../../components/atoms/Skeleton/Skeleton';
import { CirclePlusIcon } from '../../icons';
import type { ProjectDTO } from '../../services/apiTypes';
import { ProjectCard } from './components/ProjectCard';
import { useProjects } from './hooks/useProjects';

export const ProjectsHeader = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <h2 className="text-2xl font-bold">Projects</h2>
      <Button
        label="New Project"
        onClick={() => {}}
        icon={<CirclePlusIcon />}
        ariaLabel="Create new project button"
      />
    </div>
  );
};

const projectGridStyles =
  'grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4';

const Projects = () => {
  const { projects, recentProjects, isLoading } = useProjects();

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
        <div className="flex w-full flex-col gap-8">
          <div className="flex w-full flex-col gap-6">
            <h3 className="border-b border-neutral-200 pb-2 text-lg font-bold dark:border-white/20">
              Recents
            </h3>

            <div className={projectGridStyles}>
              {recentProjects?.map((project: ProjectDTO) => {
                return (
                  <ProjectCard key={project.id} {...project} isSmall={true} />
                );
              })}
            </div>
          </div>

          <hr className="text-neutral-200 dark:text-white/20" />

          <div className={projectGridStyles}>
            {projects?.map((project: ProjectDTO) => {
              return <ProjectCard key={project.id} {...project} />;
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
