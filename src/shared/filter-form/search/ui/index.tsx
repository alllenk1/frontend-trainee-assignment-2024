import { type ChangeEvent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import { useSearchMoviesQuery } from '@/shared/api';
import { MovieProps } from '@/shared/movie-card/types';

import './index.scss';

export const Search = () => {
    const cnSearch = cn('Search');

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [debouncedQuery, setDebouncedQuery] = useState<string>(searchQuery);

    const { data, isLoading } = useSearchMoviesQuery(debouncedQuery, {
        skip: debouncedQuery.trim().length === 0
    });

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 400);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className={cnSearch('')}>
            <label className={cnSearch('Label')} htmlFor="search" />
            <input
                className={cnSearch('Input')}
                id="search"
                name="search"
                placeholder="Название фильма или сериала"
                value={searchQuery}
                onChange={handleChange}
            />
            {debouncedQuery.trim().length > 0 && (
                <div className={cnSearch('Results')}>
                    {!isLoading && data?.docs.length > 0 ? (
                        data?.docs.map(
                            (item: MovieProps) =>
                                item.name && (
                                    <Link
                                        key={item.id}
                                        to={`/movie/${item.id}`}
                                    >
                                        <div
                                            key={item.id}
                                            className={cnSearch('Result')}
                                        >
                                            {`${item.name} (${item.year})`}
                                        </div>
                                    </Link>
                                )
                        )
                    ) : (
                        <div className={cnSearch('Result')}>
                            Нет результатов
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
