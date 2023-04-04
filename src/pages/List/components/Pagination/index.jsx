import React, { useState } from 'react';
import { Container } from './style';

export function Pagination ({ totalItems, itemsPerPage, onPageClick }) {
  const [currentPage, setCurrentPage] = useState(1);
 

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = page => {
    setCurrentPage(page);
    onPageClick(page);
 
  };

  return (
    <Container>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        page => (
          <button key={page} onClick={() => handlePageClick(page)}  className={currentPage === page ? 'active' : ''}>
            {page}
          </button>
        )
      )}
    </Container>
  );
};
