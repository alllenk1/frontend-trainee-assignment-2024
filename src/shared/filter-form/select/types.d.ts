import { FilterParamsType } from '@/shared/movie-card/types';

export type SelectProps = {
    type: string;
    options: string[];
    placeholder?: string;

    onChange?: (value: FilterParamsType) => void;
};
