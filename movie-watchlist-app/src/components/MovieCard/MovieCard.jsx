import React from "react";
import './MovieCard.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist } from "../../features/users/userSlice";

function MovieCard({ movie }) {
  const wishlist = useSelector(state => state.movies.wishlist)
  const activeUser = useSelector(state => state.user.activeUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(wishlist)

  const addHandler = () => {
    if (!activeUser) {
      console.log("No active user found. Please log in.");
      return;
    }
    dispatch(addToWatchlist(movie));
  };
  

  const navigateToMovieDetails = (id) =>{
    navigate(`/${id}`)
  }

  return (
    <div className="movie-card dark rajdhani-regular">
      <div className="movie-card-title dark">
        <h1>{movie.Title}</h1>
        <p className="movie-card-year dark">{movie.Year}</p>
      </div>

      <img
        className="movie-card-img"
        src={movie.Poster} 
        alt={`${movie.Title} Poster`}
      />

      <div className="movie-card-footer">
          <button className="movie-card-button text-white bg-gray-800 hover:bg-purple-700 rajdhani-semibold"
          onClick={()=> navigateToMovieDetails(movie.imdbID)}>Click to See Details</button>
        <button 
        className="movie-card-button bg-gray-800 text-white hover:bg-purple-700 rajdhani-semibold"
        onClick={addHandler}
        >Add to Watchlist
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
