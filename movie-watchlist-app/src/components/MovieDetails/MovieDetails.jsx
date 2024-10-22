import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../ui/Rating/Rating";
import Loading from "../ui/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedMovie,
  getMoviesStatus,
  fetchMovieById,
} from "../../features/movies/moviesSlice";
import {
  addToWatchlist,
  removeFromWatchlist,
  selectWatchlist,
} from "../../features/users/userSlice";

function MovieDetails() {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movieData = useSelector(getSelectedMovie);
  const status = useSelector(getMoviesStatus);
  const watchlist = useSelector(selectWatchlist);

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieById(movieId));
    }
  }, [movieId, dispatch]);

  if (status === "loading" || !movieData) {
    return <Loading />;
  }

  const isInWatchlist = watchlist.some(
    (movie) => movie.imdbID === movieData.imdbID
  );

  const handleWatchlistToggle = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(movieData.imdbID));
    } else {
      dispatch(addToWatchlist(movieData));
    }
  };

  return (
    <>
    <div className="flex h-screen bg-white dark:bg-gray-800 mx-4 rajdhani-bold border-gray-500">
      <div className="w-2/5">
        <img
          className="object-cover w-full h-full"
          src={
            movieData.Poster === "N/A" || !movieData.Poster
              ? "../../public/images/photo_not_available.jpg"
              : movieData.Poster
          }
          alt={movieData.Title}
        />
      </div>

      <div className="w-3/5 p-6">
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

        <div className="mt-4">
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Actors: </span>
            {movieData.Actors}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Director: </span>
            {movieData.Director}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Released: </span>
            {movieData.Released}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Writer: </span>
            {movieData.Writer}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Language: </span>
            {movieData.Language}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Country: </span>
            {movieData.Country}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Awards: </span>
            {movieData.Awards}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">IMDB Rating: </span>
            {movieData.imdbRating} ({movieData.imdbVotes} votes)
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Box Office: </span>
            {movieData.BoxOffice}
          </p>
        </div>

        <button
          onClick={handleWatchlistToggle}
          className={`mt-4 px-4 py-2 text-white ${
            isInWatchlist ? "bg-red-500" : "bg-blue-500"
          } rounded`}
        >
          {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Ratings:
          </h3>
          <Rating ratings={movieData.Ratings} />
        </div>
      </div>
    </div>
    </>
  );
}

export default MovieDetails;
