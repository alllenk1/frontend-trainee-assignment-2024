export type PaginationProps = {
    currentPage: number;
    totalPages: number;
    toTop?: boolean;
    type?: 'primary' | 'secondary';

    onPageChange: (page: number) => void;
};
