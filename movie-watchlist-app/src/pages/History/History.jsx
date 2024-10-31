import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearSearchHistory, selectSearchHistory } from "../../features/users/userSlice";
import { fetchMovies, setSearchQuery, setPage } from "../../features/movies/moviesSlice";
import "./History.css";

function History() {
  const navigate = useNavigate();
  const searchHistory = useSelector(selectSearchHistory) || [];
  const dispatch = useDispatch();

  const handleSearchClick = (term) => {
    dispatch(setSearchQuery(term));
    dispatch(setPage(1));
    dispatch(fetchMovies());
    navigate("/home");
  };

  const deleteHistory = () => {
    dispatch(clearSearchHistory());
  };

  return (
    <section className="container px-4 mx-auto rajdhani-bold">
      <div className="flex items-center gap-x-3">
        <h2 className="rajdhani-bold text-lg font-medium text-gray-800 dark:text-white">
          Search History
        </h2>
      </div>
      {searchHistory.length > 0 ? (
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="rajdhani-semibold py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Search Term</span>
                      </th>
                      <th
                        scope="col"
                        className="rajdhani-semibold py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Search Time</span>
                      </th>
                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Search</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {searchHistory
                      .slice()
                      .reverse()
                      .map((entry, index) => (
                        <tr key={index}>
                          <td
                            className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap cursor-pointer"
                            onClick={() => handleSearchClick(entry.term)}
                          >
                            {entry.term}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {new Date(entry.timestamp).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <button className="mt-3" onClick={deleteHistory}>
                <span className="rajdhani-semibold text-xs px-4 py-2 text-black-600 bg-red-400 rounded-full dark:bg-gray-800 dark:text-blue-400">
                  Delete All History
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-history-message">
          <h1 className="text-2xl font-bold">No search history available.</h1>
        </div>
      )}
    </section>
  );
}

export default History;
