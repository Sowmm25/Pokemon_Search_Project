import React from "react";
import "./pagination.css";

const Pagination = ({ dataPerPage, totalData, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalData / dataPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }
    paginate(pageNumber);
  };

  return (
    <div className="pagination">
      <button
        className={`pagination__button ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous     
      </button>
      
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`pagination__button ${currentPage === number ? 'active' : ''}`}
          onClick={() => handleClick(number)}
        >
          {number}
        </button>
      ))}
      <button
        className={`pagination__button ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
