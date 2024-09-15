import { configureStore } from '@reduxjs/toolkit';

import { filterApi } from '@/shared/filter-form/api';

export const store = configureStore({
  reducer: {
    [filterApi.reducerPath]: filterApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filterApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
