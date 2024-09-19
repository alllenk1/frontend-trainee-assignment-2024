import { MovieProps } from '../movie-card/types';

export type MoviesListProps = {
    movies: MovieProps[];
    isLoadingMovies: boolean;
    filterParams: any;
};
