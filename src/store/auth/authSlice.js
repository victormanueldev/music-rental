import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
};

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state, action) => {},
    logout: (status, payload) => {},
    checkingCredentials: (state) => {}
  }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
