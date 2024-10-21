import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../ui/Rating/Rating";
import Loading from "../ui/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedMovie, getMoviesStatus, fetchMovieById } from "../../features/movies/moviesSlice";

function MovieDetails() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movieData = useSelector(getSelectedMovie);
  const status = useSelector(getMoviesStatus);

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieById(movieId));  // Fetch movie details by ID
    }
  }, [movieId, dispatch]);

  if (status === "loading" || !movieData) {
    return <Loading/>;
  }

  return (
    <div className="flex h-screen bg-white dark:bg-gray-800 mx-4 rajdhani-bold">
      {/* Left Side - Image (40% width) */}
      <div className="w-2/5">
        <img
          className="object-cover w-full h-full"
          src={movieData.Poster}
          alt={movieData.Title}
        />
      </div>

      {/* Right Side - Details (60% width) */}
      <div className="w-3/5 p-6">
        {/* Title and Basic Info */}
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            {movieData.Genre}
          </span>
          <h2 className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white">
            {movieData.Title} ({movieData.Year})
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {movieData.Plot}
          </p>
        </div>

        {/* Director, Writer, and Actors */}
        <div className="mt-4">
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Actors: </span>{movieData.Actors}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Director: </span>{movieData.Director}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Released: </span>{movieData.Released}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Writer: </span>{movieData.Writer}
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-4">
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Language: </span>{movieData.Language}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Country: </span>{movieData.Country}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Awards: </span>{movieData.Awards}
          </p>
        </div>

        {/* IMDb Ratings and Box Office */}
        <div className="mt-4">
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">IMDB Rating: </span>{movieData.imdbRating} ({movieData.imdbVotes} votes)
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Box Office: </span>{movieData.BoxOffice}
          </p>
        </div>

                {/* Ratings */}
                <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Ratings:
          </h3>
          <Rating ratings={movieData.Ratings} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

