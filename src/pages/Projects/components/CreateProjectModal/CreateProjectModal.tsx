import { Modal } from '@/components/atoms/Modal/Modal';
import { useNewProject } from '../../hooks/useCreateProject';
import { CreateProjectForm } from '../CreateProjectForm/CreateProjectForm';

interface CrateProjectModalProps {
  onClose: () => void;
}

const CreateProjectModal = ({ onClose }: CrateProjectModalProps) => {
  const { onCreateHandler, isLoading } = useNewProject(onClose);

  return (
    <Modal
      title="Create project"
      onClose={onClose}
      classNames={{ container: 'w-[40rem]' }}
    >
      <CreateProjectForm
        onCreateProject={onCreateHandler}
        isLoading={isLoading}
      />
    </Modal>
  );
};

export default CreateProjectModal;
