import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ProjectDTO } from './apiTypes';
import { supabaseClient } from './supabaseClient';

export const apiClient = createApi({
  reducerPath: 'apiClient',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Projects'],
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectDTO[], void>({
      queryFn: async () => {
        const { data, error } = await supabaseClient
          .from('projects')
          .select()
          .order('create_date', { ascending: false });
        if (error) throw error;
        return { data: data || [] };
      },
      providesTags: ['Projects']
    })
  })
});

export const { useGetProjectsQuery } = apiClient;
