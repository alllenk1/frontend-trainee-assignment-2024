import { type ChangeEvent, useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';

import { useGetShowMoviesQuery } from '@/shared/api';
import type { FilterParamsType, MovieProps } from '@/shared/movie-card/types';
import { MoviesList } from '@/shared/movies-list';
import { Pagination } from '@/shared/pagination';
import { FilterForm } from '@/shared/filter-form';

import './index.scss';

export const MoviesListPage = () => {
    const cnMoviesListPage = cn('MoviesListPage');

    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [filterParams, setFilterParams] = useState<FilterParamsType[]>([]);
    const [moviesLimit, setMoviesLimit] = useState('10');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const { data: dataMoviesList, isLoading: isLoadingMoviesList } =
        useGetShowMoviesQuery({
            currentPage,
            limit: moviesLimit,
            params: filterParams
        });

    useEffect(() => {
        if (!isLoadingMoviesList && dataMoviesList) {
            setMovies(dataMoviesList.docs);
            setTotalPages(dataMoviesList.pages);
        }
    }, [dataMoviesList, isLoadingMoviesList]);

    const handleChangeFilterParams = (params: FilterParamsType) => {
        const { option, value } = params;

        setFilterParams((prev) => [
            ...prev.filter((param) => param.option !== option),
            { option, value }
        ]);
    };

    const handleChangeLimit = (event: ChangeEvent<HTMLInputElement>) => {
        setMoviesLimit(event.target.value);
    };

    return (
        <div className={cnMoviesListPage('')}>
            <div className={cnMoviesListPage('Content')}>
                <FilterForm
                    onChangeParams={handleChangeFilterParams}
                    onChangeLimit={handleChangeLimit}
                />
                {movies && (
                    <MoviesList
                        movies={movies}
                        isLoadingMovies={isLoadingMoviesList}
                        filterParams={filterParams}
                        onChangeFilterParams={handleChangeFilterParams}
                    />
                )}
            </div>
            {totalPages > 0 && (
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={(page: number) => setCurrentPage(page)}
                    toTop={true}
                />
            )}
        </div>
    );
};
