import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filterApi = createApi({
  reducerPath: 'filterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev/v1.4',
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set('X-API-KEY', 'Y9G5S66-0AVM0RC-J3Q9Z15-N5K8YD9');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query({
      query: (query) =>
        `movie/search?page=1&limit=10&query=${encodeURIComponent(query)}`
    })
  })
});

export const { useSearchMoviesQuery } = filterApi;
