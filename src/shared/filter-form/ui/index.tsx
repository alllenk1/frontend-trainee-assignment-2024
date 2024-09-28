import { memo, useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';

import { useGetSearchOptionsQuery } from '@/shared/api';

import { Search } from '../search';
import { Select } from '../select';
import { Input } from '../input';
import { RandomButton } from '../random-button';
import type { FilterFormProps, FilterItemType } from '../types';
import { defaultOptions } from '../lib';
import './index.scss';

export const FilterForm = memo(
    ({ onChangeParams, onChangeLimit }: FilterFormProps) => {
        const cnFilterForm = cn('FilterForm');

        const [options, setOptions] = useState(defaultOptions);

        const {
            data: dataCountriesOptions = [],
            isLoading: isLoadingCountriesOptions
        } = useGetSearchOptionsQuery('countries.name');
        const {
            data: dataGenresOptions = [],
            isLoading: isLoadingGenresOptions
        } = useGetSearchOptionsQuery('genres.name');

        useEffect(() => {
            if (!isLoadingCountriesOptions && !isLoadingGenresOptions) {
                setOptions((prev) => ({
                    ...prev,
                    'genres.name':
                        dataGenresOptions.map(
                            (item: FilterItemType) => item.name
                        ) || [],
                    'countries.name':
                        dataCountriesOptions.map(
                            (item: FilterItemType) => item.name
                        ) || []
                }));
            }
        }, [
            dataCountriesOptions,
            dataGenresOptions,
            isLoadingCountriesOptions,
            isLoadingGenresOptions
        ]);

        return (
            <form className={cnFilterForm('')}>
                <Search />
                <Select
                    type="genres.name"
                    placeholder="Жанр"
                    onChange={onChangeParams}
                    options={options['genres.name']}
                />
                <Select
                    type="countries.name"
                    placeholder="Страна"
                    onChange={onChangeParams}
                    options={options['countries.name']}
                />
                <Select
                    type="ageRating"
                    placeholder="Возрастной рейтинг"
                    options={options.ageRating}
                    onChange={onChangeParams}
                />
                <Input
                    placeholder="Фильмов на странице"
                    onChange={onChangeLimit}
                />
                <RandomButton />
            </form>
        );
    }
);
