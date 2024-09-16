import { useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';

import { useSearchOptionsQuery } from '@/shared/api';

import type { FilterFormProps, FilterItemType } from '../types';
import { Search } from '../search';
import { Select } from '../select';
import { defaultOptions } from '../lib';
import './index.scss';

export const FilterForm = ({ onChange }: FilterFormProps) => {
    const cnFilterForm = cn('FilterForm');

    const [options, setOptions] = useState(defaultOptions);

    const {
        data: dataCountriesOptions = [],
        isLoading: isLoadingCountriesOptions
    } = useSearchOptionsQuery('countries.name');
    const { data: dataGenresOptions = [], isLoading: isLoadingGenresOptions } =
        useSearchOptionsQuery('genres.name');

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
                onChange={onChange}
                options={options['genres.name']}
            />
            <Select
                type="countries.name"
                placeholder="Страна"
                onChange={onChange}
                options={options['countries.name']}
            />
            <Select
                type="ageRating"
                placeholder="Возрастной рейтинг"
                options={options.ageRating}
                onChange={onChange}
            />
        </form>
    );
};
