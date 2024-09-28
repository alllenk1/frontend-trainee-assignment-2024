import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import { CurrentMovie } from '@/shared/current-movie';
import { CurrentMovieLoader } from '@/shared/current-movie/current-movie-loader';
import { useGetShowMovieQuery } from '@/shared/api';

import './index.scss';

export const CurrentMoviePage = () => {
    const cnCurrentMoviePage = cn('CurrentMoviePage');

    const { movieId } = useParams();

    const { data: dataMovie, isLoading: isLoadingMovie } =
        useGetShowMovieQuery(movieId);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 850);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 850);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={cnCurrentMoviePage('')}>
            <Link to="/">
                <button
                    className={cnCurrentMoviePage('PrevButton')}
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                >
                    {isMobile ? '←' : '← назад'}
                </button>
            </Link>
            {!isLoadingMovie && movieId ? (
                <CurrentMovie
                    id={movieId}
                    name={dataMovie.name}
                    alternativeName={dataMovie.alternativeName}
                    year={dataMovie.year}
                    ageRating={dataMovie.ageRating}
                    description={dataMovie.description}
                    poster={dataMovie.poster}
                    persons={dataMovie.persons}
                    rating={dataMovie.rating}
                    similarMovies={dataMovie.similarMovies}
                />
            ) : (
                <CurrentMovieLoader />
            )}
        </div>
    );
};
