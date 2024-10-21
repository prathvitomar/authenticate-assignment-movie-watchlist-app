import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full bg-white dark:bg-gray-800 rajdhani-bold">
      <div className="container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="-mx-2">
          {pageNumbers.map((pageNumber) => (
            <a
              key={pageNumber}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(pageNumber);
              }}
              className={`inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform rounded-lg ${
                currentPage === pageNumber
                  ? "bg-gray-100 dark:bg-gray-700 dark:text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              }`}
            >
              {pageNumber}
            </a>
          ))}
        </div>

        <div className="text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-100">
            {(currentPage - 1) * 5 + 1} -{" "}
            {Math.min(currentPage * 5, totalPages * 5)} of {totalPages * 5}{" "}
            records
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pagination;