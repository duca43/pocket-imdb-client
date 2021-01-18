import { range } from 'lodash';

export const getPaginationPages = (currentPage, totalPages) => {
    const pages = []
    if (totalPages < 3) {
        for (let i in range(1, totalPages + 1)) {
          pages.push(i);
        }
      } else {
        if (currentPage === 1) {
          pages.push(...[currentPage, currentPage + 1, currentPage + 2]);
        } else if (currentPage === totalPages) {
          pages.push(...[currentPage - 2, currentPage - 1, currentPage]);
        } else {
          pages.push(...[currentPage - 1, currentPage, currentPage + 1]);
        }
    }
    return pages;
  }