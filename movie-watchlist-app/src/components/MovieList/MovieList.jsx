// import React, { useEffect, useState } from "react";
// import MovieCard from "../MovieCard/MovieCard";
// import Pagination from "../ui/Pagination/Pagination";
// import Loading from "../ui/Loading/Loading";
// import "./MovieList.css";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchMovies, 
//   getAllMovies,
//   getMoviesStatus,
//   getMoviesError,
// } from "../../features/movies/moviesSlice";
// import Error from "../ui/Error/Error";

// function MovieList() {
//   const dispatch = useDispatch();
//   const movies = useSelector(getAllMovies) || []; 
//   const movieStatus = useSelector(getMoviesStatus);
//   const error = useSelector(getMoviesError);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [moviesPerPage] = useState(10);

//   useEffect(() => {
//     if (movieStatus === "idle") {
//       dispatch(fetchMovies());
//     }
//   }, [movieStatus, dispatch]);

//   let content;
//   if (movieStatus === "loading") {
//     content = <Loading />;
//   } else if (movieStatus === "failed") {
//     content = <Error errorMessage={error}/>;
//   }

//   const indexOfLastMovie = currentPage * moviesPerPage;
//   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//   const currentMovies = movies?.slice ? movies.slice(indexOfFirstMovie, indexOfLastMovie) : [];
  
//   const totalPages = Math.ceil(movies.length / moviesPerPage);


//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <>
//       {movieStatus === "succeeded" ? (
//         <>
//           <div className="movie-list">
//             {movies && movies.length > 0 ? (
//               currentMovies.map((movie) => (
//                 <MovieCard key={movie.imdbID} movie={movie} />
//               ))
//             ) : (
//               <div>No movies found.</div>
//             )}
//           </div>
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//           />
//         </>
//       ) : (
//         <div className="movie-list">{content}</div>
//       )}
//     </>
//   );
// }

// export default MovieList;







































import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../ui/Pagination/Pagination";
import Loading from "../ui/Loading/Loading";
import "./MovieList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  getAllMovies,
  getMoviesStatus,
  getMoviesError,
} from "../../features/movies/moviesSlice";
import Error from "../ui/Error/Error";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies) || [];
  const movieStatus = useSelector(getMoviesStatus);
  const error = useSelector(getMoviesError);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("tar"); // Example query

  useEffect(() => {
    if (movieStatus === "idle") {
      dispatch(fetchMovies({ searchQuery, page: currentPage }));
    }
  }, [movieStatus, dispatch, currentPage, searchQuery]);

  let content;
  if (movieStatus === "loading") {
    content = <Loading />;
  } else if (movieStatus === "failed") {
    content = <Error errorMessage={error} />;
  }

  const totalResults = parseInt(movies.length) || 0;
  const totalPages = Math.ceil(totalResults / moviesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    dispatch(fetchMovies({ searchQuery, page: pageNumber })); // Fetch new data on page change
  };

  return (
    <>
      {movieStatus === "succeeded" ? (
        <>
          <div className="movie-list">
            {movies && movies.length > 0 ? (
              movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))
            ) : (
              <div>No movies found.</div>
            )}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div className="movie-list">{content}</div>
      )}
    </>
  );
}

export default MovieList;

