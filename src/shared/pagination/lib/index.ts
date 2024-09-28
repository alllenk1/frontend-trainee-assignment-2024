export const getPagesArray = (totalPages: number) => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
};

export const getVisiblePages = (
    currentPage: number,
    totalPages: number,
    pages: number[]
) => {
    if (totalPages <= 5 || currentPage <= 3) {
        return pages.slice(0, 5);
    } else if (totalPages - currentPage === 5) {
        return pages.slice(currentPage - 3, currentPage + 2);
    } else if (currentPage > totalPages - 3) {
        return pages.slice(totalPages - 5, totalPages);
    } else {
        const start = Math.max(currentPage - 3, 0);
        const end = Math.min(start + 5, totalPages);

        return pages.slice(start, end);
    }
};
