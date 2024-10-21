import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios";
import conf from "../../app/conf/conf";

const initialState = {
  movies: [],
  selectedMovie: null,
  status: "idle",
  error: null,
  searchQuery: "",
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (searchTerm = "") => {
    const MOVIES_API = `https://omdbapi.com/?apikey=${conf.moviesApiKey}&s=${searchTerm}&p=1`;
    const response = await axios.get(MOVIES_API);
    return response.data.Search;
  }
);

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (id) => {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${conf.moviesApiKey}&i=${id}`);
    return response.data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;  // Update searchQuery
    },
  },
  extraReducers(builder) {
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

export const { setSearchQuery } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getMoviesStatus = (state) => state.movies.status;
export const getMoviesError = (state) => state.movies.error;
export const getSelectedMovie = (state) => state.movies.selectedMovie;

export default moviesSlice.reducer;
