import { configureStore } from '@reduxjs/toolkit';
import { apiClient } from './services/api';
import authClient from './services/authApi';

export const store = configureStore({
  reducer: {
    [apiClient.reducerPath]: apiClient.reducer,
    [authClient.reducerPath]: authClient.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiClient.middleware, authClient.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
