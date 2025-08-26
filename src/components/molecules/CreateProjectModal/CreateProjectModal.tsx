import { Modal } from '@/components/atoms/Modal/Modal';
import { CreateProjectForm } from '../CreateProjectForm/CreateProjectForm';
import { useCreateProject } from './hooks/useCreateProject';

interface CrateProjectModalProps {
  onClose: () => void;
}

const CreateProjectModal = ({ onClose }: CrateProjectModalProps) => {
  const { onCreateHandler, isLoading } = useCreateProject(onClose);

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
