import { Outlet } from 'react-router-dom';

const ProjectsLayout = () => {
  return (
    <section className="mt-[3.25rem] flex h-[calc(100vh-3.25rem)] w-full p-2 pt-4 md:mt-0 md:h-full md:px-4 md:pb-0">
      <Outlet />
    </section>
  );
};

export default ProjectsLayout;
