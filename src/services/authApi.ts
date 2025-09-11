import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import type { AuthError, AuthResponse } from '@supabase/supabase-js';

import type { AuthFormType } from '@/components/molecules/AuthForm/AuthForm.schema';
import { supabaseClient } from './supabaseClient';

type AuthResultData = AuthResponse['data'];

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    signUp: builder.mutation<AuthResultData, AuthFormType>({
      queryFn: async (credentials) => {
        const { data, error } = await supabaseClient.auth.signUp(credentials);
        if (error) return { error: error as AuthError };
        return { data };
      }
    }),
    signIn: builder.mutation<AuthResultData, AuthFormType>({
      queryFn: async (credentials) => {
        const { data, error } =
          await supabaseClient.auth.signInWithPassword(credentials);
        if (error) return { error: error as AuthError };
        return { data };
      }
    }),
    signOut: builder.mutation<undefined, void>({
      queryFn: async () => {
        const { error } = await supabaseClient.auth.signOut();
        if (error) return { error: error as AuthError };
        return { data: undefined };
      }
    })
  })
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation } =
  authApi;
