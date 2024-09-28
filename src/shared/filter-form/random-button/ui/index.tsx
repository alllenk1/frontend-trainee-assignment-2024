import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import { useGetRandomTitleQuery } from '@/shared/api';

import './index.scss';

export function RandomButton() {
    const cnRandomButton = cn('RandomButton');

    const [triggerKey, setTriggerKey] = useState(Date.now());

    const { data, isLoading } = useGetRandomTitleQuery(triggerKey);

    return isLoading ? (
        <div className={cnRandomButton('')}>Загрузка...</div>
    ) : (
        <Link
            to={`/movie/${data.id}`}
            onClick={() => setTriggerKey(Date.now())}
        >
            <div className={cnRandomButton('')}>Случайный фильм!</div>
        </Link>
    );
}
