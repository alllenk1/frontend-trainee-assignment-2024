import { cn } from '@bem-react/classname';

import './index.scss';

export const MovieCardLoader = () => {
    const cnMovieCardLoader = cn('MovieCardLoader');

    return (
        <div className={cnMovieCardLoader('')}>
            <div className={cnMovieCardLoader('Poster')} />
            <div className={cnMovieCardLoader('MainInfo')}></div>
            <div className={cnMovieCardLoader('Description')}></div>
            <div className={cnMovieCardLoader('Ratings')}>
                <div className={cnMovieCardLoader('Rating')}></div>
                <div className={cnMovieCardLoader('Rating')}></div>
            </div>
            <div className={cnMovieCardLoader('Genres')}>
                <div className={cnMovieCardLoader('Genre')}></div>
                <div className={cnMovieCardLoader('Genre')}></div>
            </div>
        </div>
    );
};
