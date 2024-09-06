import { cn } from '@bem-react/classname';

import { MovieCard } from '@/shared/movie-card';
import type { MovieProps } from '@/shared/movie-card/types';

import type { MoviesListProps } from '../types';
import './index.scss';

export const MoviesList = ({ movies }: MoviesListProps) => {
  const cnMoviesList = cn('MoviesList');

  return (
    <div className={cnMoviesList('')}>
      {movies.map((movie: MovieProps) => (
        <MovieCard
          id={movie.id}
          key={movie.name}
          name={movie.name}
          shortDescription={movie.shortDescription}
          poster={movie.poster.url}
          rating={movie.rating}
          genres={movie.genres}
        />
      ))}
    </div>
  );
};
