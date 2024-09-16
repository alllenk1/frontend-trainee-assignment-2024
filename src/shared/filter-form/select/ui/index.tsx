import { type ChangeEvent, useState } from 'react';
import { cn } from '@bem-react/classname';

import type { SelectProps } from '../types';
import './index.scss';

export function Select({ type, placeholder, options, onChange }: SelectProps) {
    const cnSelect = cn('Select');

    const [selectedValue, setSelectedValue] = useState<string>('');

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        const { value } = event.target;
        setSelectedValue(value);

        if (onChange) onChange({ option: type, value });
    }

    return (
        <div className={cnSelect('', { placeholder: !selectedValue })}>
            <label className={cnSelect('Label')} htmlFor={type} />
            <select
                className={cnSelect('Input')}
                name={type}
                onChange={handleChange}
            >
                {placeholder && (
                    <option value="placeholder" hidden>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
