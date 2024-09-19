import { useMemo } from 'react';
import { cn } from '@bem-react/classname';

import { PaginationProps } from '../types';
import { getPagesArray, getVisiblePages } from '../lib';
import './index.scss';

export const Pagination = ({
    totalPages,
    currentPage,
    onPageChange
}: PaginationProps) => {
    const cnPagination = cn('Pagination');

    const pages = useMemo(() => getPagesArray(totalPages), [totalPages]);
    const visiblePages = getVisiblePages(currentPage, totalPages, pages);

    const handlePageChange = (page: number) => {
        onPageChange(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={cnPagination('')}>
            <button
                className={cnPagination('Start', {
                    disabled: totalPages <= 3 || currentPage <= 3
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
                        active: currentPage === page
                    })}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}
            {totalPages !== currentPage && (
                <button
                    className={cnPagination('Next')}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    дальше
                </button>
            )}
        </div>
    );
};
