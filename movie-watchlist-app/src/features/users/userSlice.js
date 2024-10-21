import { createSlice } from '@reduxjs/toolkit';
import { login as authLogin } from '../auth/authSlice';

const usersFromStorage = JSON.parse(localStorage.getItem('users')) || [];
const activeUserFromStorage = JSON.parse(localStorage.getItem('activeUser'));

const initialState = {
  users: usersFromStorage,
  activeUser: activeUserFromStorage || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const email = action.payload;
      const user = state.users.find(user => user.email === email) || { email, watchlist: [] };

      state.activeUser = user;
      if (!state.users.some(u => u.email === email)) {
        state.users.push(user);
      }
      
      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('activeUser', JSON.stringify(user));
    },
    logout: (state) => {
      localStorage.removeItem('activeUser'); // Clear active user from localStorage
      state.email = null;
      state.isAuthenticated = false;
    },
    restoreUser: (state) => {
      state.activeUser = activeUserFromStorage;
    },
    addToWatchlist: (state, action) => {
      if (state.activeUser) {
        const movieToAdd = action.payload;
        if (!state.activeUser.watchlist.some(movie => movie.imdbID === movieToAdd.imdbID)) {
          state.activeUser.watchlist.push(movieToAdd);
    
          // Update the users array with the new activeUser watchlist
          const userIndex = state.users.findIndex(user => user.email === state.activeUser.email);
          if (userIndex !== -1) {
            state.users[userIndex] = state.activeUser;  // Update the user in the users array
          }
    
          // Save the updated users array and activeUser to localStorage
          localStorage.setItem('users', JSON.stringify(state.users));
          localStorage.setItem('activeUser', JSON.stringify(state.activeUser));
        }
      }
    },
    
    removeFromWatchlist: (state, action) => {
      if (state.activeUser) {
        state.activeUser.watchlist = state.activeUser.watchlist.filter(movie => movie.imdbID !== action.payload);
    
        // Update the users array with the new activeUser watchlist
        const userIndex = state.users.findIndex(user => user.email === state.activeUser.email);
        if (userIndex !== -1) {
          state.users[userIndex] = state.activeUser;  // Update the user in the users array
        }
    
        // Save the updated users array and activeUser to localStorage
        localStorage.setItem('users', JSON.stringify(state.users));
        localStorage.setItem('activeUser', JSON.stringify(state.activeUser));
      }
    },
    
    getWatchlist: (state) => {
      return state.activeUser?.watchlist || [];
    }
  },
});

export const { login, logout, restoreUser, addToWatchlist, removeFromWatchlist } = userSlice.actions;
export const selectWatchlist = (state) => {
  return state.user.activeUser?.watchlist || [];
};
export const loginUser = (email) => (dispatch) => {
  dispatch(login(email));
  dispatch(authLogin(email));
};


export default userSlice.reducer;