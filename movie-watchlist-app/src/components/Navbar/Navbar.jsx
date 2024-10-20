// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {

//   const [searchValue, setSearchValue] = useState("");

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="logo">
//           <img src="../../public/images/movie-watchlist-icon.ico" alt="Logo" className="logo-img" />
//         </Link>
//         <div className="search-bar">
//           <div className="search-container">
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Enter your Favorite Movie"
//               onChange={(e)=> setSearchValue(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="navbar-links">
//           <Link to="/" className="nav-link">Home</Link>
//           <Link to="/watch-list" className="nav-link">My WatchList</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;













import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../features/movies/moviesSlice';  // Adjust the import as needed

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  // Function to handle search
  const handleSearch = () => {
    if (searchValue.trim()) {
      dispatch(fetchMovies(searchValue));  // Dispatch the action with the input value
      setSearchValue("");  // Optionally reset the search value after dispatch
    }
  };

  // Function to handle 'Enter' key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();  // Call handleSearch on 'Enter'
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="../../public/images/movie-watchlist-icon.ico" alt="Logo" className="logo-img" />
        </Link>
        <div className="search-bar">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Enter your Favorite Movie"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}  // Update state on change
              onKeyDown={handleKeyDown}  // Call handleKeyDown on key press
            />
            <button className="search-button" onClick={handleSearch}>🔍</button> {/* Search button */}
          </div>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/watch-list" className="nav-link">My WatchList</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
