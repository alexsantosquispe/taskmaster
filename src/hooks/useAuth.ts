import { useAppDispatch, useAppSelector } from '../store/redux';
import { clearUser, setUser } from '../store/slices/authSlice';

import { supabaseClient } from '@/services/supabaseClient';
import { useEffect } from 'react';

export function useAuth() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data }) => {
      if (data.session?.user) {
        dispatch(setUser(data.session.user));
      } else {
        dispatch(clearUser());
      }
    });

    const { data: subscription } = supabaseClient.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          dispatch(setUser(session.user));
        } else {
          dispatch(clearUser());
        }
      }
    );

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return { user, isAuthenticated: !!user };
}
