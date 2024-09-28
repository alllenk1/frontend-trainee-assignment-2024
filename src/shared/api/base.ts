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
        getShowMovies: builder.query<
            MoviesResponseType,
            {
                currentPage?: number;
                limit?: string;
                params?: FilterParamsType[];
            }
        >({
            query: ({ currentPage = 1, limit = 10, params = [] }) => {
                let url = `v1.4/movie?page=${currentPage}&limit=${limit}&sortField=top250&sortType=-1&lists=top500`;

                if (params.length > 0) {
                    url = params.reduce((acc, param) => {
                        acc += `&${param.option}=${param.value}`;
                        return acc;
                    }, url);
                }

                return url;
            }
        }),
        getShowMovie: builder.query({
            query: (movieId) =>
                `https://api.kinopoisk.dev/v1.4/movie/${movieId}`
        }),
        getSearchMovies: builder.query({
            query: (query) => `v1.4/movie/search?page=1&limit=10&query=${query}`
        }),
        getSearchOptions: builder.query({
            query: (type) => `v1/movie/possible-values-by-field?field=${type}`
        }),
        getRandomTitle: builder.query({
            query: (isTrigger) =>
                'v1.4/movie/random?notNullFields=name&notNullFields=description&notNullFields=poster.url'
        }),
        getSeasonAndEpisodes: builder.query({
            query: (movieId) => `v1.4/season?page=1&limit=10&movieId=${movieId}`
        }),
        getReviews: builder.query({
            query: ({ currentPage = 1, movieId }) =>
                `v1.4/review?page=${currentPage}&limit=1&movieId=${movieId}`
        }),
        getPosters: builder.query({
            query: (movieId) => `v1.4/image?page=1&limit=30&movieId=${movieId}`
        })
    })
});

export const {
    useGetShowMoviesQuery,
    useGetShowMovieQuery,
    useGetSearchMoviesQuery,
    useGetSearchOptionsQuery,
    useGetRandomTitleQuery,
    useGetReviewsQuery,
    useGetPostersQuery
} = baseApi;
