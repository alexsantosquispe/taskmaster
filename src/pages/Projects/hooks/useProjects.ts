import { useGetProjectsQuery } from '../../../services/api';

export const useProjects = () => {
  const { data, error, isLoading } = useGetProjectsQuery();

  return { projects: data || [], isLoading, error };
};
