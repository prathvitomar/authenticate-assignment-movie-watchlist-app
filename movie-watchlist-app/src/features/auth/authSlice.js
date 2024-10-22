import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.email = null;
      state.isAuthenticated = false;
    },
    restoreAuth: (state, action) => {
      state.email = action.payload.email; 
      state.isAuthenticated = true;
    },
  },
});

export const { login, logout, restoreAuth } = authSlice.actions;
export default authSlice.reducer;