export const getPagesArray = (totalPages: number) => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
};

export const getVisiblePages = (
    currentPage: number,
    totalPages: number,
    pages: number[]
) => {
    if (totalPages <= 3 || currentPage <= 3) {
        return pages.slice(0, 5);
    } else {
        const start = Math.max(currentPage - 5, currentPage - 3);
        const end = Math.min(start + 5, totalPages);

        return pages.slice(start, end);
    }
};
