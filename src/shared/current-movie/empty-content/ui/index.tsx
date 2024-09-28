import { cn } from '@bem-react/classname';

export const EmptyContent = () => {
    const cnEmptyContent = cn('EmptyContent');

    return (
        <div className={cnEmptyContent('')}>
            <p>В разделе пока пусто</p>
        </div>
    );
};
