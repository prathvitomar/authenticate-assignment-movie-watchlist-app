import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../../features/movies/moviesSlice";

function Pagination({ currentPage, totalPages, setCurrentPage, totalResults }) {
  const dispatch = useDispatch();
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      dispatch(setPage(page))
    }
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800">
      <div className="container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 ">
        <div className="-mx-2">
          {[...Array(totalPages)].map((_, index) => (
            <a
              key={index + 1}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(index + 1);
              }}
              className={`inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform rounded-lg ${
                currentPage === index + 1
                  ? "bg-gray-100 dark:bg-gray-700"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {index + 1}
            </a>
          ))}
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
