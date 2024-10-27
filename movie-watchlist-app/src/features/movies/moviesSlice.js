// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import conf from "../../app/conf/conf";

// const initialState = {
//   movies: [],
//   selectedMovie: null,
//   status: "idle",
//   error: null,
//   searchQuery: "",
//   page: 1, 
// };

// export const fetchMovies = createAsyncThunk(
//   "movies/fetchMovies",
//   async (_, { getState }) => {
//     const { searchQuery, page } = getState().movies;
//     const MOVIES_API = `https://omdbapi.com/?apikey=${conf.moviesApiKey}&s=${searchQuery}&page=${page}`;
//     const response = await axios.get(MOVIES_API);
//     return response.data;
//   }
// );

// export const fetchMovieById = createAsyncThunk(
//   "movies/fetchMovieById",
//   async (id) => {
//     const response = await axios.get(
//       `https://www.omdbapi.com/?apikey=${conf.moviesApiKey}&i=${id}`
//     );
//     return response.data;
//   }
// );

// const moviesSlice = createSlice({
//   name: "movies",
//   initialState,
//   reducers: {
//     setSearchQuery: (state, action) => {
//       state.searchQuery = action.payload;
//     },
//     setPage: (state, action) => {
//       state.page = action.payload;
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(fetchMovies.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchMovies.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.movies = action.payload;
//       })
//       .addCase(fetchMovies.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(fetchMovieById.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchMovieById.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.selectedMovie = action.payload;
//       })
//       .addCase(fetchMovieById.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setSearchQuery, setPage } = moviesSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
// export const getMoviesStatus = (state) => state.movies.status;
// export const getMoviesError = (state) => state.movies.error;
// export const getSelectedMovie = (state) => state.movies.selectedMovie;
// export const getSearchQuery = (state) => state.movies.searchQuery;

// export default moviesSlice.reducer;





























import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../app/conf/conf";

const initialState = {
  movies: [],
  selectedMovie: null,
  status: "idle",
  error: null,
  searchQuery: "", // Store search term
  page: 1,         // Store page number for pagination
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { getState }) => {
    const { searchQuery, page } = getState().movies;
    const MOVIES_API = `https://omdbapi.com/?apikey=${conf.moviesApiKey}&s=${searchQuery}&page=${page}`;
    const response = await axios.get(MOVIES_API);
    return response.data;
  }
);

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (id) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${conf.moviesApiKey}&i=${id}`
    );
    return response.data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery, setPage } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getMoviesStatus = (state) => state.movies.status;
export const getMoviesError = (state) => state.movies.error;
export const getSelectedMovie = (state) => state.movies.selectedMovie;
export const getSearchQuery = (state) => state.movies.searchQuery;
export const getPage = (state) => state.movies.page;

export default moviesSlice.reducer;
