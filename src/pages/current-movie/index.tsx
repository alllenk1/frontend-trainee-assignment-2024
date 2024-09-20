import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { CurrentMovie } from '@/shared/current-movie';
import { CurrentMovieProps } from '@/shared/current-movie/types';

export const CurrentMoviePage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState<CurrentMovieProps>();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': 'Y9G5S66-0AVM0RC-J3Q9Z15-N5K8YD9'
        }
    };

    useEffect(() => {
        fetch(`https://api.kinopoisk.dev/v1.4/movie/${movieId}`, options)
            .then((response) => response.json())
            .then((response) => setMovie(response))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <Link to="/">
                <h1>Назад</h1>
            </Link>
            {movie && (
                <CurrentMovie
                    name={movie.name}
                    alternativeName={movie.alternativeName}
                    year={movie.year}
                    ageRating={movie.ageRating}
                    description={movie.description}
                    poster={movie.poster}
                    persons={movie.persons}
                />
            )}
        </>
    );
};
