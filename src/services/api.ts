import type {
  CreateProjectDTO,
  ProjectDTO,
  UpdateProjectDTO
} from './apiTypes';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { supabaseClient } from './supabaseClient';

export const apiClient = createApi({
  reducerPath: 'apiClient',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Projects'],
  refetchOnMountOrArgChange: false,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectDTO[], void>({
      queryFn: async () => {
        const { data, error } = await supabaseClient
          .from('projects')
          .select()
          .order('update_date', { ascending: false });
        if (error) throw error;
        return { data: data || [] };
      },
      providesTags: ['Projects']
    }),
    createProject: builder.mutation<ProjectDTO, CreateProjectDTO>({
      queryFn: async (newProject) => {
        const { data, error } = await supabaseClient
          .from('projects')
          .insert(newProject)
          .select()
          .single();
        if (error) throw error;
        return { data };
      },
      invalidatesTags: ['Projects']
    }),
    updateProject: builder.mutation<ProjectDTO, UpdateProjectDTO>({
      queryFn: async (project) => {
        const { data, error } = await supabaseClient
          .from('projects')
          .update(project)
          .eq('id', project.id)
          .select()
          .single();
        if (error) throw error;
        return { data };
      },
      invalidatesTags: ['Projects']
    }),
    deleteProject: builder.mutation<
      { status: boolean; projectId: string },
      string
    >({
      queryFn: async (projectId) => {
        const { error } = await supabaseClient
          .from('projects')
          .delete()
          .eq('id', projectId);
        if (error) throw error;
        return { data: { status: true, projectId } };
      },
      invalidatesTags: ['Projects']
    })
  })
});

export const {
  useGetProjectsQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation
} = apiClient;
