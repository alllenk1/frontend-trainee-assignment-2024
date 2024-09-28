import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import type { SimilarMoviesProps } from '../types';
import './index.scss';

export const SimilarMovies = ({ similarMovies }: SimilarMoviesProps) => {
    const cnSimilarMovies = cn('SimilarMovies');

    return (
        <div className={cnSimilarMovies('')}>
            <Splide
                aria-label="Posters"
                options={{
                    type: similarMovies.length > 6 ? 'loop' : '',
                    width: '100%',
                    pagination: false,
                    gap: '10px',
                    // perPage: 6,
                    perMove: 1,
                    autoWidth: true,
                    height: 'auto',
                    classes: {
                        arrow: cnSimilarMovies('Arrow'),
                        prev: cnSimilarMovies('Prev'),
                        next: cnSimilarMovies('Next')
                    }
                }}
            >
                {similarMovies.map((item, index) => (
                    <SplideSlide key={index}>
                        <Link to={`/movie/${item.id}`}>
                            <img
                                className={cnSimilarMovies('Poster')}
                                src={item.poster.url}
                                alt="poster"
                                width="158"
                                height="240"
                                loading="lazy"
                            />
                        </Link>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};
