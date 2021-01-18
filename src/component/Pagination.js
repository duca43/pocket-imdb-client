import React from 'react';
import { getPaginationPages } from '../util/pagination'

const Pagination = ({ currentPage, totalPages, paginate }) => {

    const pages = getPaginationPages(currentPage, totalPages);

    return (
        <nav className="mr-5">
            <ul className="pagination justify-content-end">
            <li className={"page-item " + (currentPage === 1 && 'disabled')}>
                <button className="page-link" onClick={() => paginate(1)}>First</button> 
            </li>
            <li className={"page-item " + (currentPage === 1 && 'disabled')}>
                <button className="page-link" onClick={() => paginate(currentPage - 1)}>&laquo;</button>
            </li>
            {pages.map(number =>
                <li key={ number } className="page-item">
                <button className={"page-link " + (currentPage === number && 'text-dark')}
                        onClick={() => paginate(number)}>
                    { number }
                </button>
                </li>
            )}
            <li className={"page-item " + (currentPage === totalPages && 'disabled')}>
                <button className="page-link" onClick={() => paginate(currentPage + 1)}>&raquo;</button>
            </li>
            <li className={"page-item " + (currentPage === totalPages && 'disabled')}>
                <button className="page-link" onClick={() => paginate(totalPages)}>Last</button>
            </li>
            </ul>
        </nav>
    );
};

export default Pagination;
