import { FilterParamsType, MovieProps } from '../movie-card/types';

export type MoviesListProps = {
    movies: MovieProps[];
    isLoadingMovies: boolean;
    filterParams: FilterParamsType[];

    onChangeFilterParams: (params: FilterParamsType) => void;
};
