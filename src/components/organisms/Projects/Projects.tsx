import { useGetProjectsQuery } from '../../../services/api';

const Projects = () => {
  const { data } = useGetProjectsQuery();
  console.log(data);
  return (
    <div className="flex flex-1 flex-col">
      <h2 className="text-2xl font-bold">Projects</h2>
    </div>
  );
};

export default Projects;
