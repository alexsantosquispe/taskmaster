import { useToast } from '@/hooks/useToast';
import { TOAST_TYPES } from '@/models/types';
import { useCreateProjectMutation } from '@/services/api';
import type { CreateProjectDTO } from '@/services/apiTypes';
import type { ProjectFormValues } from '../CreateProjectForm/ProjectForm.types';

export const useCreateProject = (onClose: () => void) => {
  const [createProject, createProjectResult] = useCreateProjectMutation();
  const { addToast } = useToast();

  const onCreateHandler = (formData: ProjectFormValues) => {
    const newProject = {
      name: formData.name,
      code: formData.code.toUpperCase(),
      color: formData.color?.value,
      description: formData?.description
    } satisfies CreateProjectDTO;

    createProject(newProject)
      .unwrap()
      .then((response) => {
        addToast({
          id: response.id,
          title: 'Success',
          message: `${response.name} was created successfully`,
          type: TOAST_TYPES.SUCCESS,
          duration: 3000
        });
      })
      .catch(() => {
        addToast({
          id: formData.name,
          title: 'Error',
          message: 'An error occurred while creating the project',
          type: TOAST_TYPES.ERROR,
          duration: 4000
        });
      })
      .finally(() => {
        onClose();
      });
  };

  return {
    onCreateHandler,
    isLoading: createProjectResult.isLoading
  };
};
