import { Modal } from '@/components/atoms/Modal/Modal';
import { ProjectForm } from '../CreateProjectForm/ProjectForm';
import type { UpdateProjectDTO } from '@/services/apiTypes';
import { getColorByValue } from '@/utils';
import { useEditProject } from './useEditProject';

interface EditProjectModalProps extends UpdateProjectDTO {
  onClose: () => void;
}

const EditProjectModal = ({
  id,
  name,
  code,
  color,
  description,
  onClose
}: EditProjectModalProps) => {
  const { onEditProject, isLoading } = useEditProject({
    projectId: id,
    onClose
  });

  const colorOption = getColorByValue(color);

  return (
    <Modal
      title="Edit project"
      onClose={onClose}
      classNames={{ container: 'w-[40rem]' }}
    >
      <ProjectForm
        submitButtonLabel="Update project"
        onSubmitProject={onEditProject}
        isLoading={isLoading}
        defaultValues={{ name, code, color: colorOption, description }}
      />
    </Modal>
  );
};

export default EditProjectModal;
