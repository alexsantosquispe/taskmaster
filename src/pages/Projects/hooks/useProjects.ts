import { useGetProjectsQuery } from '../../../services/api';

export const useProjects = () => {
  const { data, error, isLoading } = useGetProjectsQuery();

  const recentProjects = data?.length ? data.slice(0, 3) : [];
  const projects = data?.length ? data.slice(3, data.length) : [];

  return { projects, recentProjects, isLoading, error };
};
