import { useDeleteProjectMutation } from '@/services/api';

interface UseDeleteProjectProps {
  projectId: string;
  onClose: () => void;
}

export const useDeleteProject = ({
  projectId,
  onClose
}: UseDeleteProjectProps) => {
  const [deleteProject, deleteProjectResult] = useDeleteProjectMutation();

  const onDeleteProject = () => {
    deleteProject(projectId)
      .unwrap()
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
