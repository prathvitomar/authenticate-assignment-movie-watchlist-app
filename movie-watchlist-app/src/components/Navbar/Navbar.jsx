// ../../public/images/movie-watchlist-icon.ico

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="../../public/images/movie-watchlist-icon.ico" alt="Logo" className="logo-img" />
        </Link>
        <div className="search-bar">
          <div className="search-container">
            <span className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="search-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0l6 6" />
              </svg>
            </span>
            <input
              type="text"
              className="search-input"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/components" className="nav-link">Components</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

