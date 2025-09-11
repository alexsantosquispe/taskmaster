import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import type { AuthFormType } from '@/components/molecules/AuthForm/AuthForm.schema';
import { supabaseClient } from './supabaseClient';

export const authClient = createApi({
  reducerPath: 'authClient',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    signUp: builder.mutation<unknown, AuthFormType>({
      queryFn: async (credentials) => {
        const { data, error } = await supabaseClient.auth.signUp(credentials);
        if (error) throw error;
        return { data };
      }
    }),
    signIn: builder.mutation<unknown, AuthFormType>({
      queryFn: async (credentials) => {
        const { data, error } =
          await supabaseClient.auth.signInWithPassword(credentials);
        if (error) throw error;
        return { data };
      }
    })
  })
});

export default authClient;
