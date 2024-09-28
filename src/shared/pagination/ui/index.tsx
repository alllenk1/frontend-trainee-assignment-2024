import { useMemo } from 'react';
import { cn } from '@bem-react/classname';

import { PaginationProps } from '../types';
import { getPagesArray, getVisiblePages } from '../lib';
import './index.scss';

export const Pagination = ({
    totalPages,
    currentPage,
    onPageChange,
    toTop,
    type = 'primary'
}: PaginationProps) => {
    const cnPagination = cn('Pagination');

    const pages = useMemo(() => getPagesArray(totalPages), [totalPages]);
    const visiblePages = getVisiblePages(currentPage, totalPages, pages);

    const handlePageChange = (page: number) => {
        onPageChange(page);
        if (toTop) window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            className={cnPagination('', {
                secondary: type === 'secondary'
            })}
        >
            <button
                className={cnPagination('Start', {
                    disabled: totalPages <= 5 || currentPage <= 3,
                    secondary: type === 'secondary'
                })}
                disabled={totalPages <= 3 || currentPage <= 3}
                onClick={() => handlePageChange(1)}
            >
                В начало
            </button>
            {visiblePages.map((page) => (
                <button
                    key={page}
                    className={cnPagination('Button', {
                        active: currentPage === page,
                        secondary: type === 'secondary'
                    })}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className={cnPagination('Next', {
                    disabled: totalPages === currentPage,
                    secondary: type === 'secondary'
                })}
                disabled={totalPages === currentPage}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                дальше
            </button>
        </div>
    );
};
