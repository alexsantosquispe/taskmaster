import { Modal } from '@/components/atoms/Modal/Modal';

interface CrateProjectModalProps {
  onClose: () => void;
}

const CreateProjectModal = ({ onClose }: CrateProjectModalProps) => {
  return (
    <Modal title="Create project" onClose={onClose}>
      <div>modal form</div>
    </Modal>
  );
};

export default CreateProjectModal;
