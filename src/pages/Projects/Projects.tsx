import { Button } from '../../components/atoms/Button/Button';
import { CirclePlusIcon } from '../../icons';
import { useGetProjectsQuery } from '../../services/api';
import { ProjectCard } from './components/ProjectCard';

const Projects = () => {
  const { data } = useGetProjectsQuery();

  return (
    <div className="flex flex-col gap-8 overflow-auto md:px-4 xl:max-w-[80rem]">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Button
          label="New Project"
          onClick={() => {}}
          icon={<CirclePlusIcon />}
          ariaLabel="Create new project button"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
        {data?.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
