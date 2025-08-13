import { Button } from '../../components/atoms/Button/Button';
import { CirclePlusIcon } from '../../icons';
import { useGetProjectsQuery } from '../../services/api';

const Projects = () => {
  const { data } = useGetProjectsQuery();
  console.log(data);

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="flex gap-4">
          <Button
            label="New Project"
            onClick={() => {}}
            icon={<CirclePlusIcon />}
            ariaLabel="Create new project button"
          />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Projects;
