import { Outlet } from 'react-router-dom';

const ProjectsLayout = () => {
  return (
    <section className="flex w-full flex-1 justify-center overflow-hidden">
      <Outlet />
    </section>
  );
};

export default ProjectsLayout;
