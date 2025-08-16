import { useState } from 'react';
import { Banner } from '../../components/atoms/Banner/Banner';
import { Button } from '../../components/atoms/Button/Button';
import { Modal } from '../../components/atoms/Modal/Modal';
import { ProjectCard } from '../../components/atoms/ProjectCard/ProjectCard';
import { Skeleton } from '../../components/atoms/Skeleton/Skeleton';
import { CirclePlusIcon } from '../../icons';
import type { ProjectDTO } from '../../services/apiTypes';
import { useProjects } from './hooks/useProjects';

interface CrateProjectModalProps {
  onClose: () => void;
}

export const CreateProjectModal = ({ onClose }: CrateProjectModalProps) => {
  return (
    <Modal title="Create project" onClose={onClose}>
      <div>modal form</div>
    </Modal>
  );
};

export const ProjectsHeader = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Button
          label="New Project"
          onClick={openModal}
          icon={<CirclePlusIcon />}
          ariaLabel="Create new project button"
        />
      </div>
      {isOpenModal && <CreateProjectModal onClose={closeModal} />}
    </>
  );
};

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
