import { useCreateProjectMutation } from '@/services/api';
import type { CreateProjectDTO } from '@/services/apiTypes';
import type { NewProjectFormValues } from '../../CreateProjectForm/CreateProjectForm.types';

export const useCreateProject = (onClose: () => void) => {
  const [createProject, createProjectResult] = useCreateProjectMutation();

  const onCreateHandler = (formData: NewProjectFormValues) => {
    const newProject = {
      name: formData.name,
      code: formData.code.toUpperCase(),
      color: formData.color?.value,
      description: formData?.description
    } satisfies CreateProjectDTO;

    createProject(newProject)
      .unwrap()
      .finally(() => {
        onClose();
      });
  };

  return {
    onCreateHandler,
    isLoading: createProjectResult.isLoading
  };
};
