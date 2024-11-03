import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../../features/movies/moviesSlice";
import userSlice from "../../features/users/userSlice";
import authSlice from "../../appwrite/auth/auth";

const persistedUser = JSON.parse(localStorage.getItem("activeUser"));
const persistedEmail = persistedUser ? persistedUser.email : null;

const store = configureStore({
  reducer: {
    auth: authSlice,
    movies: moviesSlice,
    user: userSlice,
  },
  preloadedState: {
    user: {
      activeUser: persistedUser,
      users: JSON.parse(localStorage.getItem("users")) || [],
    },
    auth: {
      email: persistedEmail,
      isAuthenticated: !!persistedEmail,
    },
  },
});

export default store;
