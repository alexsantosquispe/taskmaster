import { useUpdateProjectMutation } from '@/services/api';
import type { UpdateProjectDTO } from '@/services/apiTypes';
import type { ProjectFormValues } from '../CreateProjectForm/ProjectForm.types';

interface UseEditProjectProps {
  projectId: string;
  onClose: () => void;
}

export const useEditProject = ({ projectId, onClose }: UseEditProjectProps) => {
  const [updateProject, updateProjectResult] = useUpdateProjectMutation();

  const onEditProject = (formData: ProjectFormValues) => {
    const updatedProject = {
      id: projectId,
      name: formData.name,
      code: formData.code,
      color: formData.color?.value || '',
      description: formData.description
    } satisfies UpdateProjectDTO;

    updateProject(updatedProject)
      .unwrap()
      .finally(() => {
        onClose();
      });
  };

  return { onEditProject, isLoading: updateProjectResult.isLoading };
};
