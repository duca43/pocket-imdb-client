import { range } from 'lodash';

export const getPaginationPages = (currentPage, totalPages) => {
  if (totalPages < 3) {
    const pages = [];
    for (let i in range(1, totalPages + 1)) {
      pages.push(i);
    }
    return pages;
  }

  if (currentPage === 1) {
    return [1, 2, 3];
  }
  
  if (currentPage === totalPages) {
    return [totalPages - 2, totalPages - 1, totalPages];
  }

  return [currentPage - 1, currentPage, currentPage + 1];
}