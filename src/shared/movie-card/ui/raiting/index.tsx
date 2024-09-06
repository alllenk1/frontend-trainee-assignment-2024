import { cn } from '@bem-react/classname';

import type { MoviesRatings } from '../../types';

import './index.scss';

export const Raiting = ({ imdb, kp }: MoviesRatings) => {
    const cnRaiting = cn('Raiting');

    return (
        <div className={cnRaiting('')}>
            <div className={cnRaiting('Block')}>
                <svg className={cnRaiting('Icon')}>
                    <use href="sprite.svg#imdb" />
                </svg>
                <p className={cnRaiting('Value')}>{imdb}</p>
            </div>
            <div className={cnRaiting('Block')}>
                <svg className={cnRaiting('Icon')}>
                    <use href="sprite.svg#kinopoisk" />
                </svg>
                <p className={cnRaiting('Value')}>{kp}</p>
            </div>
        </div>
    );
};
