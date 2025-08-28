import { useToast } from '@/hooks/useToast';
import { TOAST_TYPES } from '@/models/types';
import { useUpdateProjectMutation } from '@/services/api';
import type { UpdateProjectDTO } from '@/services/apiTypes';
import type { ProjectFormValues } from '../CreateProjectForm/ProjectForm.types';

interface UseEditProjectProps {
  projectId: string;
  onClose: () => void;
}

export const useEditProject = ({ projectId, onClose }: UseEditProjectProps) => {
  const [updateProject, updateProjectResult] = useUpdateProjectMutation();
  const { addToast } = useToast();

  const onEditProject = (formData: ProjectFormValues) => {
    const updatedProject = {
      id: projectId,
      name: formData.name,
      code: formData.code.toUpperCase(),
      color: formData.color?.value || '',
      description: formData.description
    } satisfies UpdateProjectDTO;

    updateProject(updatedProject)
      .unwrap()
      .then((response) => {
        addToast({
          id: response.id,
          title: 'Success',
          message: `${response.name} was updated successfully`,
          type: TOAST_TYPES.SUCCESS,
          duration: 3000
        });
      })
      .catch(() => {
        addToast({
          id: formData.name,
          title: 'Error',
          message: 'An error occurred while updating the project',
          type: TOAST_TYPES.ERROR,
          duration: 4000
        });
      })
      .finally(() => {
        onClose();
      });
  };

  return { onEditProject, isLoading: updateProjectResult.isLoading };
};
