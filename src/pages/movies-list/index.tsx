import { useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';

import type { MovieProps } from '@/shared/movie-card/types';
import { MoviesList } from '@/shared/movies-list';
import { Pagination } from '@/shared/pagination';
import { FilterForm } from '@/shared/filter-form';

import './index.scss';

export function MoviesListPage() {
  const cnMoviesListPage = cn('MoviesListPage');

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': process.env.TOKEN
    }
  };

  useEffect(() => {
    fetch(
      `https://api.kinopoisk.dev/v1.4/movie?page=${currentPage}&limit=10&lists=top250`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.docs);
        setTotalPages(response.pages);
      })
      .catch((err) => console.error(err));
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={cnMoviesListPage('')}>
      <div className={cnMoviesListPage('Content')}>
        <FilterForm />
        {movies.length > 0 && <MoviesList movies={movies} />}
      </div>
      {totalPages > 0 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
