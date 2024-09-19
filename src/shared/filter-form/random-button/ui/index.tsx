import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import { useRandomTitleQuery } from '@/shared/api';
import { MovieProps } from '@/shared/movie-card/types';

import './index.scss';

export function RandomButton() {
    const cnRandomButton = cn('RandomButton');

    const [trigger, setTrigger] = useState(0);

    const { data: dataRandomTitle, isLoading: isLoadingRandomTitle } =
        useRandomTitleQuery(trigger) as {
            data: MovieProps | undefined;
            isLoading: boolean;
        };

    const handleChangeTrigger = () => {
        setTrigger((prev) => prev + 1);
    };

    return isLoadingRandomTitle ? (
        <div className={cnRandomButton('')}>Загрузка...</div>
    ) : (
        <Link to={`/movie/${dataRandomTitle?.id}`}>
            <div className={cnRandomButton('')} onClick={handleChangeTrigger}>
                Случайный фильм!
            </div>
        </Link>
    );
}
