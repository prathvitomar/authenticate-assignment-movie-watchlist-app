import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setSearchQuery, setPage} from "../../features/movies/moviesSlice";
// import ThemeBtn from "../ui/ThemeBtn/ThemeBtn";
import useTheme from "../../features/useTheme/Theme";
import { addSearchHistory } from "../../features/users/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  // const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  const {mode} = useTheme()
  const handleLogout = () => {
    localStorage.removeItem("activeUser");
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (searchValue.trim()) {
      dispatch(setSearchQuery(searchValue));
      dispatch(setPage(1));
      dispatch(fetchMovies());
      dispatch(addSearchHistory(searchValue));
      navigate("/home");
      document.activeElement.blur();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/home");
      handleSearch(); 
    }
  };

  return (
    <nav className={`navbar rajdhani-bold ${mode}`}>
      <div className="navbar-container">
        <Link to="/home" className="logo">
          <img
            src="/images/movie-watchlist-icon.ico"
            alt="Logo"
            className="logo-img"
          />
        </Link>
        <form
          className="flex items-center max-w-sm mx-auto"
          onSubmit={handleSearch}
        >
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Enter your Favorite Movie"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        <div className="navbar-links">
          <Link to="/home" className="nav-link rajdhani-bold">
            Home
          </Link>
          <a
            href="/watch-list"
            className="nav-link rajdhani-bold"
          >
            My WatchList
          </a>
          <Link to="/login" className="nav-link rajdhani-bold">
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-700 transition-colors duration-200 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <span className="nav-link rajdhani-bold">Log Out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </button>
          </Link>
          {/* <ThemeBtn/> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
