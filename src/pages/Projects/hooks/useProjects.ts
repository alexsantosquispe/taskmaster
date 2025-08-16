import { useGetProjectsQuery } from '@/services/api';

export const useProjects = () => {
  const { data, error, isLoading, isFetching } = useGetProjectsQuery();

  return { projects: data || [], isLoading: isLoading || isFetching, error };
};
