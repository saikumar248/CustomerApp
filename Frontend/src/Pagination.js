import React, { useState, useEffect } from "react";

const Pagination = ({ customersPerPage, totalCustomers, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1); // Reset currentPage whenever totalCustomers or customersPerPage changes
  }, [totalCustomers, customersPerPage]);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < Math.ceil(totalCustomers / customersPerPage)) {
      paginate(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            onClick={handlePrevClick}
            disabled={currentPage === 1}
            className="page-link"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => {
                paginate(number);
                setCurrentPage(number);
              }}
              className={`page-link ${currentPage === number ? "active" : ""}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            onClick={handleNextClick}
            disabled={
              currentPage === Math.ceil(totalCustomers / customersPerPage)
            }
            className="page-link"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
