import { type ChangeEvent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import { useSearchMoviesQuery } from '@/shared/api';
import { MovieProps } from '@/shared/movie-card/types';

import { Input } from '../../input';
import './index.scss';

export const Search = () => {
    const cnSearch = cn('Search');

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [debouncedQuery, setDebouncedQuery] = useState<string>(searchQuery);

    const { data: dataSearchQuery, isLoading: isLoadingSearchQuery } =
        useSearchMoviesQuery(debouncedQuery, {
            skip: debouncedQuery.trim().length === 0
        });

    console.log(dataSearchQuery);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 400);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    const handleChangeSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className={cnSearch('')}>
            <Input
                type="search"
                placeholder="Название фильма или сериала"
                value={searchQuery}
                onChange={handleChangeSearchQuery}
            />
            {debouncedQuery.trim().length > 0 && (
                <div className={cnSearch('Results')}>
                    {!isLoadingSearchQuery &&
                    dataSearchQuery?.docs.length > 0 ? (
                        dataSearchQuery?.docs.map(
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
