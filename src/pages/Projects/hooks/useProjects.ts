import { useGetProjectsQuery } from '@/services/api';

export const useProjects = (searchValue?: string) => {
  const { data, error, isLoading, isFetching } =
    useGetProjectsQuery(searchValue);

  return { projects: data || [], isLoading: isLoading || isFetching, error };
};
