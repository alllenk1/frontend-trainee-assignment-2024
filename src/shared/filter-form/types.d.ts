import { FilterParamsType } from '@/shared/movie-card/types';

export type FilterItemType = {
    name: string;
    value: string;
};

export type FilterFormProps = {
    onChange: (value: FilterParamsType) => void;
};
