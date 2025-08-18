import { Modal } from '@/components/atoms/Modal/Modal';
import { CreateProjectForm } from '../CreateProjectForm/CreateProjectForm';

interface CrateProjectModalProps {
  onClose: () => void;
}

const CreateProjectModal = ({ onClose }: CrateProjectModalProps) => {
  return (
    <Modal title="Create project" onClose={onClose}>
      <CreateProjectForm />
    </Modal>
  );
};

export default CreateProjectModal;
