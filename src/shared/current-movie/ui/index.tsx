import { memo, useEffect } from 'react';
import { cn } from '@bem-react/classname';

import { Actors } from '../actors';
import { Reviews } from '../reviews';
import { Posters } from '../posters';
import { SimilarMovies } from '../similar-movies';
import { Rating } from '../rating';
import { EmptyContent } from '../empty-content';
import { CurrentMovieProps } from '../types';
import './index.scss';

export const CurrentMovie = memo(
    ({
        id,
        name,
        alternativeName,
        year,
        ageRating,
        description,
        poster,
        persons,
        rating,
        similarMovies
    }: CurrentMovieProps) => {
        const cnCurrentMovie = cn('CurrentMovie');

        useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, [id]);

        return (
            <div className={cnCurrentMovie('')}>
                <div className={cnCurrentMovie('Promo')}>
                    <img
                        className={cnCurrentMovie('Poster')}
                        src={poster.url}
                        alt="movie's poster"
                        width="250"
                        height="375"
                    />
                    <div className={cnCurrentMovie('Info')}>
                        <p className={cnCurrentMovie('NameAndYear')}>
                            {year ? `${name}, ${year}` : `${name}`}
                        </p>

                        <p className={cnCurrentMovie('AltNameAndRating')}>
                            {alternativeName && (
                                <>
                                    {alternativeName}
                                    {ageRating && ', '}
                                </>
                            )}
                            {ageRating && `${ageRating}+`}
                        </p>
                        <p className={cnCurrentMovie('Description')}>
                            {description && description}
                        </p>
                        <div className={cnCurrentMovie('Ratings')}>
                            {rating.kp > 0 && (
                                <Rating source="kinopoisk" value={rating.kp} />
                            )}
                            {rating.imdb > 0 && (
                                <Rating source="imdb" value={rating.imdb} />
                            )}
                        </div>
                    </div>
                </div>
                <div className={cnCurrentMovie('Persons')}>
                    <p className={cnCurrentMovie('Subtitle')}>
                        В главных ролях
                    </p>
                    {persons && <Actors persons={persons} />}
                </div>
                <div className={cnCurrentMovie('Reviews')}>
                    <p className={cnCurrentMovie('Subtitle')}>
                        Рецензии зрителей
                    </p>
                    <Reviews movieId={id} />
                </div>
                <div className={cnCurrentMovie('Posters')}>
                    <p className={cnCurrentMovie('Subtitle')}>
                        Кадры, постеры, скриншоты
                    </p>
                    <Posters movieId={id} />
                </div>
                <div className={cnCurrentMovie('Similar')}>
                    <p className={cnCurrentMovie('Subtitle')}>
                        Если вам понравился этот фильм
                    </p>
                    {similarMovies && similarMovies.length > 0 ? (
                        <SimilarMovies similarMovies={similarMovies} />
                    ) : (
                        <EmptyContent />
                    )}
                </div>
            </div>
        );
    }
);
