import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { MoviesResponseType } from '@/shared/movie-card/types';
import { FilterParamsType } from '@/shared/movie-card/types';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.kinopoisk.dev/',
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            headers.set('X-API-KEY', process.env.TOKEN ?? '');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        showMovies: builder.query<
            MoviesResponseType,
            {
                currentPage?: number;
                limit?: string;
                params?: FilterParamsType[];
            }
        >({
            query: ({ currentPage = 1, limit = 10, params = [] }) => {
                let url = `v1.4/movie?page=${currentPage}&limit=${limit}&lists=top250`;

                if (params.length > 0) {
                    url = params.reduce((acc, param) => {
                        acc += `&${param.option}=${param.value}`;
                        return acc;
                    }, url);
                }

                return url;
            }
        }),
        searchMovies: builder.query({
            query: (query) => `v1.4/movie/search?page=1&limit=10&query=${query}`
        }),
        searchOptions: builder.query({
            query: (type) => `v1/movie/possible-values-by-field?field=${type}`
        })
    })
});

export const {
    useShowMoviesQuery,
    useSearchMoviesQuery,
    useSearchOptionsQuery
} = baseApi;
