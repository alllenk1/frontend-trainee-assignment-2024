import { cn } from '@bem-react/classname';

import './index.scss';

export const CurrentMovieLoader = () => {
    const cnCurrentMovieLoader = cn('CurrentMovieLoader');

    return (
        <div className={cnCurrentMovieLoader('')}>
            <div className={cnCurrentMovieLoader('Main')}>
                <div className={cnCurrentMovieLoader('Poster')}></div>
                <div className={cnCurrentMovieLoader('About')}>
                    <div className={cnCurrentMovieLoader('Title')}></div>
                    <div className={cnCurrentMovieLoader('Subtitle')}></div>
                    <div className={cnCurrentMovieLoader('Description')}></div>
                </div>
            </div>
            <div className={cnCurrentMovieLoader('Secondary')}>
                <div className={cnCurrentMovieLoader('Subtitle')}></div>
                <div className={cnCurrentMovieLoader('Description')}></div>
            </div>
            <div className={cnCurrentMovieLoader('Secondary')}>
                <div className={cnCurrentMovieLoader('Subtitle')}></div>
                <div className={cnCurrentMovieLoader('Description')}></div>
            </div>
            <div className={cnCurrentMovieLoader('Secondary')}>
                <div className={cnCurrentMovieLoader('Subtitle')}></div>
                <div className={cnCurrentMovieLoader('Description')}></div>
            </div>
        </div>
    );
};
