import { Modal } from '@/components/atoms/Modal/Modal';
import { ProjectForm } from '../CreateProjectForm/ProjectForm';
import { useCreateProject } from './useCreateProject';

interface CrateProjectModalProps {
  onClose: () => void;
}

const CreateProjectModal = ({ onClose }: CrateProjectModalProps) => {
  const { onCreateHandler, isLoading } = useCreateProject(onClose);

  return (
    <Modal
      title="New project"
      onClose={onClose}
      classNames={{ container: 'md:w-[40rem]' }}
    >
      <ProjectForm
        submitButtonLabel="Create project"
        onSubmitProject={onCreateHandler}
        isLoading={isLoading}
      />
    </Modal>
  );
};

export default CreateProjectModal;
