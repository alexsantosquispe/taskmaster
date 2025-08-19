import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CreateProjectDTO, ProjectDTO } from './apiTypes';

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
    })
  })
});

export const { useGetProjectsQuery, useCreateProjectMutation } = apiClient;
