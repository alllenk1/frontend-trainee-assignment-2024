import { ChangeEvent } from 'react';

export type InputProps = {
    value?: string;
    type?: string;
    placeholder?: string;

    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
};
