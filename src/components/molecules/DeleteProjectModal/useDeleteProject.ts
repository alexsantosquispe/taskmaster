import { useToast } from '@/hooks/useToast';
import { TOAST_TYPES } from '@/models/types';
import { useDeleteProjectMutation } from '@/services/api';

interface UseDeleteProjectProps {
  projectId: string;
  projectName: string;
  onClose: () => void;
}

export const useDeleteProject = ({
  projectId,
  projectName,
  onClose
}: UseDeleteProjectProps) => {
  const [deleteProject, deleteProjectResult] = useDeleteProjectMutation();
  const { addToast } = useToast();

  const onDeleteProject = () => {
    deleteProject(projectId)
      .unwrap()
      .then(() => {
        addToast({
          id: projectId,
          title: 'Success',
          message: `${projectName} was deleted successfully`,
          type: TOAST_TYPES.SUCCESS,
          duration: 3000
        });
      })
      .catch(() => {
        addToast({
          id: projectName,
          title: 'Error',
          message: 'An error occurred while deleting the project',
          type: TOAST_TYPES.ERROR,
          duration: 4000
        });
      })
      .finally(() => {
        onClose();
      });
  };

  return {
    onDeleteProject,
    isLoading: deleteProjectResult.isLoading,
    error: deleteProjectResult.error
  };
};
