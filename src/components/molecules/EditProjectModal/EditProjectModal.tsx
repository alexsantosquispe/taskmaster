import { Modal } from '@/components/atoms/Modal/Modal';

const EditProjectModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal
      title="Edit project"
      onClose={onClose}
      classNames={{ container: 'w-[40rem]' }}
    >
      <p>Edit project form goes here</p>
    </Modal>
  );
};

export default EditProjectModal;
