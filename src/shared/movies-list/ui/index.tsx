import { cn } from '@bem-react/classname';

import { MovieCard } from '@/shared/movie-card';
import { MovieCardLoader } from '@/shared/movie-card/movie-card-loader';
import type { MovieProps } from '@/shared/movie-card/types';

import type { MoviesListProps } from '../types';
import './index.scss';

export const MoviesList = ({ movies, isLoadingMovies }: MoviesListProps) => {
    const cnMoviesList = cn('MoviesList');

    return (
        <div className={cnMoviesList('')}>
            {isLoadingMovies ? (
                <>
                    {Array.from({ length: 8 }, (_, index) => (
                        <MovieCardLoader key={index} />
                    ))}
                </>
            ) : (
                movies.map((movie: MovieProps) => (
                    <MovieCard
                        id={movie.id}
                        key={movie.id}
                        name={movie.name}
                        shortDescription={movie.shortDescription}
                        poster={movie.poster.url}
                        rating={movie.rating}
                        genres={movie.genres}
                    />
                ))
            )}
        </div>
    );
};
