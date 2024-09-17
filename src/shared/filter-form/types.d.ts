import { ChangeEvent } from 'react';

import { FilterParamsType } from '@/shared/movie-card/types';

export type FilterItemType = {
    name: string;
    value: string;
};

export type FilterFormProps = {
    onChangeParams: (value: FilterParamsType) => void;
    onChangeLimit: (value: ChangeEvent<HTMLInputElement>) => void;
};
