import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Loading from "../ui/Loading/Loading";
import "./MovieList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  getAllMovies,
  getMoviesStatus,
  getMoviesError,
  getSearchQuery,
} from "../../features/movies/moviesSlice";
import Error from "../ui/Error/Error";
import ShowMessage from "../ui/ShowMessage/ShowMessage";
import Pagination from "../Pagination/Pagination";
// import useTheme from "../../features/useTheme/Theme";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies) || [];
  const movieStatus = useSelector(getMoviesStatus);
  const error = useSelector(getMoviesError);
  const searchQuery = useSelector(getSearchQuery);
  // const { mode } = useTheme()
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalResults = movies.totalResults
    ? parseInt(movies.totalResults, 10)
    : 0;
  const totalPages = movies.totalResults
    ? Math.ceil(movies.totalResults / 10)
    : 1;

  useEffect(() => {
    setImagesLoaded(false);
  }, [movies]);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  useEffect(() => {
    dispatch(fetchMovies(searchQuery, currentPage));
  }, [dispatch, searchQuery, currentPage]);

  let content;
  if (movieStatus === "loading") {
    content = <Loading />;
  } else if (movieStatus === "failed") {
    content = <Error errorMessage={error} />;
  } else if (
    movieStatus === "succeeded" &&
    movies.Error === "Incorrect IMDb ID."
  ) {
    content = (
      <ShowMessage message="Please Search Your Favorite Movie to See Results." />
    );
  } else if (movieStatus === "succeeded" && movies.Error) {
    content = <ShowMessage message={movies.Error} />;
  }

  return (
    <>
      {movieStatus === "succeeded" && movies.Search ? (
        <>
          <div className={`movie-list`}>
            {movies.Search && movies.Search.length > 0 ? (
              movies.Search.map((movie) => (
                <div className="movie-card" key={movie.imdbID}>
                  <MovieCard movie={movie} onImageLoad={handleImageLoad}/>
                </div>
              ))
            ) : (
              <ShowMessage message="Please Search Your Favorite Movie to See Results." />
            )}
          </div>
        </>
      ) : (
        <div className="load-error">{content}</div>
      )}
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          totalResults={totalResults}
        />
      </div>
    </>
  );
}

export default MovieList;
