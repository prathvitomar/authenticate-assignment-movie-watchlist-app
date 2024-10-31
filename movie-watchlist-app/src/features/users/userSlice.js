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
      const user = state.users.find(user => user.email === email) || { email, watchlist: [], searchHistory: [] };

      state.activeUser = user;
      if (!state.users.some(u => u.email === email)) {
        state.users.push(user);
      }
      
      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('activeUser', JSON.stringify(user));
    },
    logout: (state) => {
      localStorage.removeItem('activeUser');
      state.email = null;
      state.activeUser = null; 
      state.isAuthenticated = false;
      state.watchlist = [],
      state.searchHistory = [];
    },
    restoreUser: (state) => {
      state.activeUser = activeUserFromStorage;
    },
    addToWatchlist: (state, action) => {
      if (state.activeUser) {
        const movieToAdd = action.payload;
        if (!state.activeUser.watchlist.some(movie => movie.imdbID === movieToAdd.imdbID)) {
          state.activeUser.watchlist.push(movieToAdd);
    
          const userIndex = state.users.findIndex(user => user.email === state.activeUser.email);
          if (userIndex !== -1) {
            state.users[userIndex] = state.activeUser;
          }
    
          localStorage.setItem('users', JSON.stringify(state.users));
          localStorage.setItem('activeUser', JSON.stringify(state.activeUser));
        }
      }
    },
    removeFromWatchlist: (state, action) => {
      if (state.activeUser) {
        state.activeUser.watchlist = state.activeUser.watchlist.filter(movie => movie.imdbID !== action.payload);
    
        const userIndex = state.users.findIndex(user => user.email === state.activeUser.email);
        if (userIndex !== -1) {
          state.users[userIndex] = state.activeUser;
        }
    
        localStorage.setItem('users', JSON.stringify(state.users));
        localStorage.setItem('activeUser', JSON.stringify(state.activeUser));
      }
    },
    addSearchHistory: (state, action) => {
      if (state.activeUser) {
        const searchTerm = action.payload;
        const searchEntry = { term: searchTerm, timestamp: new Date().toISOString() }; 
        if (!state.activeUser.searchHistory.some(entry => entry.term === searchTerm)) {
          state.activeUser.searchHistory.push(searchEntry);
      
          const userIndex = state.users.findIndex(user => user.email === state.activeUser.email);
          if (userIndex !== -1) {
            state.users[userIndex] = state.activeUser;
          }
    
          localStorage.setItem('users', JSON.stringify(state.users));
          localStorage.setItem('activeUser', JSON.stringify(state.activeUser));
        }
      }
    },
    clearSearchHistory: (state) => {
      if (state.activeUser) {
        state.activeUser.searchHistory = [];
        const userIndex = state.users.findIndex(user => user.email === state.activeUser.email);
        if (userIndex !== -1) {
          state.users[userIndex] = state.activeUser;
        }
        localStorage.setItem('users', JSON.stringify(state.users));
        localStorage.setItem('activeUser', JSON.stringify(state.activeUser));
      }
    }
  },
});

export const { login, logout, restoreUser, addToWatchlist, removeFromWatchlist, addSearchHistory, clearSearchHistory } = userSlice.actions;
export const selectWatchlist = (state) => {
  return state.user.activeUser?.watchlist || [];
};
export const selectSearchHistory = (state) => {
  return state.user.activeUser?.searchHistory || [];
};
export const loginUser = (email) => (dispatch) => {
  dispatch(login(email));
  dispatch(authLogin(email));
};


export default userSlice.reducer;