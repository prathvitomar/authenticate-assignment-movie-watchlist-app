import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPage } from "../../features/movies/moviesSlice";

function Pagination({ currentPage, totalPages, setCurrentPage, totalResults }) {
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      dispatch(setPage(page));
    }
  };

  const maxVisiblePages = 10;
  const halfRange = Math.floor(maxVisiblePages / 2);
  const startPage = Math.max(1, Math.min(currentPage - halfRange, totalPages - maxVisiblePages + 1));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  return (
    <div className="w-full bg-white dark:bg-gray-800">
      <div className="container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="-mx-2 flex items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>

          {[...Array(endPage - startPage + 1)].map((_, index) => {
            const page = startPage + index;
            return (
              <Link
                key={page}
                to={`#`}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
                className={`inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform rounded-lg ${
                  currentPage === page
                    ? "bg-gray-100 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {page}
              </Link>
            );
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <div className="text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-100">
            {((currentPage - 1) * 10) + 1} - {Math.min(currentPage * 10, totalResults)} of {totalResults} records
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
