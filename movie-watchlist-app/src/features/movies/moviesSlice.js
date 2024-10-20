import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import conf from "../../app/conf/conf";

const initialState = {
  movies: [],
  wishlist: [],
  status: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (searchTerm = "") => {
  const MOVIES_API = `https://omdbapi.com/?apikey=${conf.moviesApiKey}&s=${searchTerm}`;
  const response = await axios.get(MOVIES_API);
  return response.data.Search;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removedFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((movie) => movie.imdbID !== action.payload.id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addToWishlist, removedFromWishlist } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getMoviesStatus = (state) => state.movies.status;
export const getMoviesError = (state) => state.movies.error;

export default moviesSlice.reducer;

