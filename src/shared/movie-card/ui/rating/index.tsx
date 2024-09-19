import { cn } from '@bem-react/classname';

import type { MoviesRatings } from '../../types';

import './index.scss';

export const Rating = ({ imdb, kp }: MoviesRatings) => {
    const cnRating = cn('Rating');

    return (
        <div className={cnRating('')}>
            <div className={cnRating('Block')}>
                <svg className={cnRating('Icon')}>
                    <use href="sprite.svg#imdb" />
                </svg>
                <p className={cnRating('Value')}>{imdb}</p>
            </div>
            <div className={cnRating('Block')}>
                <svg className={cnRating('Icon')}>
                    <use href="sprite.svg#kinopoisk" />
                </svg>
                <p className={cnRating('Value')}>{kp}</p>
            </div>
        </div>
    );
};
