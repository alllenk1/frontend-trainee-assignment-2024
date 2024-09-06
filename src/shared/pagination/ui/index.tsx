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

  return (
    <div className={cnPagination('')}>
      {visiblePages.map((page) => (
        <div
          key={page}
          className={cnPagination('Button', { active: currentPage === page })}
          onClick={() => onPageChange(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};
