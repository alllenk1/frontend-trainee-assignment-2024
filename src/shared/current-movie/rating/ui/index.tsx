import { cn } from '@bem-react/classname';

import type { RatingProps } from '../types';
import './index.scss';

export const Rating = ({ source, value }: RatingProps) => {
    const cnRating = cn('Rating');

    const percent = value * 10;

    return (
        <div className={cnRating('')}>
            <svg className={cnRating('Img')}>
                <use href={`/sprite.svg#${source}`} />
            </svg>
            <div className={cnRating('ProgressBar')}>
                <div
                    className={cnRating('Percent', {
                        positive: percent >= 75,
                        neutral: percent >= 50 && percent < 75,
                        negative: percent < 50
                    })}
                    style={{ width: `${percent}%` }}
                >
                    {parseFloat(value.toFixed(1))}
                </div>
            </div>
        </div>
    );
};
