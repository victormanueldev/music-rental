import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'not-authtenticated',
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
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.photoURL = payload.photoURL;
      state.uid = payload.uid;
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
    clearError: (state) => {
      state.errorMessage = null;
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, clearError } = authSlice.actions;

export default authSlice.reducer;
