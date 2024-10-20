import React from "react";
import './MovieCard.css';
import { Link } from "react-router-dom";

function MovieCard({ movie }) {

  return (
    <div className="movie-card dark">
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
        <button className="movie-card-button">Click to See Details</button>
        <button className="movie-card-button">Add to Watchlist</button>
      </div>
    </div>
  );
}

export default MovieCard;
