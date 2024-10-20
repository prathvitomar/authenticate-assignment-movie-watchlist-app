// import React from "react";

// function MovieDetails() {
//   return (
//     <>
//       <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
//         <img
//           className="object-cover w-full h-64"
//           src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
//           alt="Article"
//         />

//         <div className="p-6">
//           <div>
//             <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
//               Product
//             </span>
//             <a
//               href="#"
//               className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
//               tabindex="0"
//               role="link"
//             >
//               I Built A Successful Blog In One Year
//             </a>
//             <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
//               parturient et sem ipsum volutpat vel. Natoque sem et aliquam
//               mauris egestas quam volutpat viverra. In pretium nec senectus
//               erat. Et malesuada lobortis.
//             </p>
//           </div>

//           <div className="mt-4">
//             <div className="flex items-center">
//               <div className="flex items-center">
//                 <img
//                   className="object-cover h-10 rounded-full"
//                   src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
//                   alt="Avatar"
//                 />
//                 <a
//                   href="#"
//                   className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
//                   tabindex="0"
//                   role="link"
//                 >
//                   Jone Doe
//                 </a>
//               </div>
//               <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
//                 21 SEP 2015
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MovieDetails;




import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Rating from "../ui/Rating/Rating";

function MovieDetails() {
  const { movieId } = useParams();
  // const movieData = useSelector((state) => state.movies[movieId]); 
  const movieData = {
    "Title": "Thor",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "06 May 2011",
    "Runtime": "115 min",
    "Genre": "Action, Fantasy",
    "Director": "Kenneth Branagh",
    "Writer": "Ashley E. Miller, Zack Stentz, Don Payne",
    "Actors": "Chris Hemsworth, Anthony Hopkins, Natalie Portman",
    "Plot": "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    "Language": "English",
    "Country": "United States",
    "Awards": "5 wins & 30 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjRhNGZjZjEtYTQzYS00OWUxLThjNGEtMTIwMTE2ZDFlZTZkXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "77%"
      },
      {
        "Source": "Metacritic",
        "Value": "57/100"
      }
    ],
    "Metascore": "57",
    "imdbRating": "7.0",
    "imdbVotes": "913,231",
    "imdbID": "tt0800369",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$181,030,624",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  } 

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-white dark:bg-gray-800 mx-4">
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
            <span className="font-bold">Director: </span>{movieData.Director}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Writer: </span>{movieData.Writer}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400">
            <span className="font-bold">Actors: </span>{movieData.Actors}
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

