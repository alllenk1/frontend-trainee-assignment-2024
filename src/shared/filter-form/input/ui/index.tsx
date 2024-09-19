import { cn } from '@bem-react/classname';

import { InputProps } from '../types';
import './index.scss';

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
    const cnInput = cn('Input');

    return (
        <div className={cnInput('')}>
            <label className={cnInput('Label')} htmlFor={type} />
            <input
                className={cnInput('Value')}
                id={type}
                name={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
