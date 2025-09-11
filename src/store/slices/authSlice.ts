import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { User } from '@supabase/supabase-js';

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    }
  }
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
