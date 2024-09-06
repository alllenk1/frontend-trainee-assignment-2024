import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import type { MovieProps } from '@/shared/movie-card/types';
import { MoviesList } from '@/shared/movies-list';

export function MoviesListPage() {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': process.env.TOKEN
    }
  };

  useEffect(() => {
    fetch(
      'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=12&lists=top250',
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.docs))
      .catch((err) => console.error(err));
  }, []);

  return <>{movies.length > 0 && <MoviesList movies={movies} />}</>;
}
