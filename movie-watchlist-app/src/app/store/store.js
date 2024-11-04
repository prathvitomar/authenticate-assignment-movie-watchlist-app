import { configureStore } from "@reduxjs/toolkit";
import  moviesSlice  from "../../features/movies/moviesSlice";
import  userSlice  from "../../features/users/userSlice";
import  authSlice  from "../../features/auth/authSlice";

const persistedUser = JSON.parse(localStorage.getItem('activeUser'));
const persistedEmail = persistedUser ? persistedUser.email : null;

const store = configureStore({
    reducer : {
        movies : moviesSlice,
        user : userSlice,
        auth : authSlice
    },
    preloadedState: {
        user: {
          activeUser: persistedUser,
          users: JSON.parse(localStorage.getItem('users')) || [],
        },
        auth: {
          email: persistedEmail,
          isAuthenticated: !!persistedEmail,
        },
    },   
})

export default store;
