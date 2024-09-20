import type { MouseEvent } from 'react';
import { cn } from '@bem-react/classname';

import type { FilterParamsType, MoviesGenre } from '../../types';

import './index.scss';

export const Genre = ({ name, onChangeFilterParams }: MoviesGenre) => {
    const cnGenre = cn('Genre');

    const handleGenreClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();

        const newFilterParam: FilterParamsType = {
            option: 'genres.name',
            value: name
        };

        onChangeFilterParams(newFilterParam);
    };

    return (
        <button className={cnGenre('')} onClick={handleGenreClick}>
            {name}
        </button>
    );
};
