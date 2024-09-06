export const getPagesArray = (totalPages: number) => {
  return Array.from({ length: totalPages }, (_, index) => index + 1);
};

export const getVisiblePages = (
  currentPage: number,
  totalPages: number,
  pages: number[]
) => {
  let start = Math.max(0, currentPage - 1);
  let end = Math.min(start + 10, totalPages);

  if (totalPages - start <= 10) {
    start = Math.max(0, totalPages - 10);
    end = totalPages;
  }

  return pages.slice(start, end);
};
