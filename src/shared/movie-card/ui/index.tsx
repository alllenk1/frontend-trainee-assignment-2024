import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';

import { Rating } from './rating';
import { Genre } from './genre';

import type { MovieProps } from '../types';
import './index.scss';

export const MovieCard = ({
    id,
    poster,
    name,
    shortDescription,
    rating,
    genres,
    onChangeFilterParams
}: MovieProps) => {
    const cnMovieCard = cn('MovieCard');

    return (
        <Link to={`/movie/${id}`}>
            <div className={cnMovieCard('')}>
                <img
                    className={cnMovieCard('Poster')}
                    src={poster.url}
                    alt="movie's poster"
                    loading="lazy"
                />
                <p className={cnMovieCard('MainInfo')}>{name}</p>
                <p className={cnMovieCard('Description')}>{shortDescription}</p>
                {rating && <Rating imdb={rating.imdb} kp={rating.kp} />}
                <div className={cnMovieCard('Genres')}>
                    {genres &&
                        genres
                            .slice(0, 3)
                            .map((genre) => (
                                <Genre
                                    key={genre.name}
                                    name={genre.name}
                                    onChangeFilterParams={onChangeFilterParams}
                                />
                            ))}
                </div>
            </div>
        </Link>
    );
};
