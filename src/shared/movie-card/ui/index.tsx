import { cn } from '@bem-react/classname';

import { Raiting } from './raiting';
import { Genre } from './genre';

import type { MovieProps } from '../types';
import './index.scss';

export const MovieCard = ({
  poster,
  name,
  shortDescription,
  rating,
  genres
}: MovieProps) => {
  const cnMovieCard = cn('MovieCard');

  return (
    <div className={cnMovieCard('')}>
      <img
        className={cnMovieCard('Poster')}
        src={poster}
        alt="movie's poster"
      />
      <p className={cnMovieCard('MainInfo')}>{name}</p>
      <p className={cnMovieCard('Description')}>{shortDescription}</p>
      <Raiting imdb={rating.imdb} kp={rating.kp} />
      <div className={cnMovieCard('Genres')}>
        {genres &&
          genres.slice(0, 3).map((genre) => <Genre name={genre.name} />)}
      </div>
    </div>
  );
};
