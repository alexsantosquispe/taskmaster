import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import type { AuthApiError, AuthResponse } from '@supabase/supabase-js';

import type { AuthFormType } from '@/components/molecules/AuthForm/AuthForm.schema';
import type { ProfileDTO } from './apiTypes';
import { supabaseClient } from './supabaseClient';

type AuthResultData = AuthResponse['data'];

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    signUp: builder.mutation<AuthResultData, AuthFormType>({
      queryFn: async (credentials) => {
        try {
          const { data, error } = await supabaseClient.auth.signUp(credentials);
          if (error) throw error;
          const user = data.user;
          if (!user) {
            throw new Error('Signup succeeded but no user returned.');
          }
          const { error: upsertError } = await supabaseClient
            .from('profiles')
            .upsert({
              id: user.id,
              email: user.email,
              username: user.email?.split('@')[0],
              first_name: '',
              last_name: ''
            });

          if (upsertError) throw upsertError;
          return { data };
        } catch (error) {
          return { error: (error as AuthApiError).message };
        }
      }
    }),
    signIn: builder.mutation<AuthResultData, AuthFormType>({
      queryFn: async (credentials) => {
        try {
          const { data, error } =
            await supabaseClient.auth.signInWithPassword(credentials);
          if (error) throw error;
          return { data };
        } catch (error) {
          return { error: (error as AuthApiError).message as string };
        }
      }
    }),
    signOut: builder.mutation<undefined, void>({
      queryFn: async () => {
        try {
          const { error } = await supabaseClient.auth.signOut();
          if (error) throw error;
          return { data: undefined };
        } catch (error) {
          return { error: (error as AuthApiError).message };
        }
      }
    }),
    getProfile: builder.query<ProfileDTO, string | undefined>({
      queryFn: async (profileId) => {
        try {
          const { data, error } = await supabaseClient
            .from('profiles')
            .select()
            .eq('id', profileId)
            .single();
          if (error) throw error;
          return { data };
        } catch (error) {
          return { error: (error as AuthApiError).message };
        }
      }
    }),
    updateProfile: builder.mutation<unknown, ProfileDTO>({
      queryFn: async (profile) => {
        try {
          const { data, error } = await supabaseClient
            .from('profiles')
            .update(profile)
            .eq('id', profile.id)
            .select()
            .single();
          if (error) throw error;
          return { data };
        } catch (error) {
          return { error: (error as AuthApiError).message };
        }
      }
    })
  })
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useSignOutMutation,
  useGetProfileQuery,
  useUpdateProfileMutation
} = authApi;
