import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ProjectDTO } from './apiTypes';
import { supabaseClient } from './supabaseClient';

export const apiClient = createApi({
  reducerPath: 'apiClient',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Projects'],
  endpoints: (builder) => ({
    getProjects: builder.query<ProjectDTO[] | null, void>({
      queryFn: async () => {
        const { data, error } = await supabaseClient.from('projects').select();
        if (error) throw error;
        return { data };
      },
      providesTags: ['Projects']
    })
  })
});

export const { useGetProjectsQuery } = apiClient;
