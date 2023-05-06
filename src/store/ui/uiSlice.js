import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  showToast: false,
  feedbackMessage: ''
};

export const uiSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload.loading;
    },
    setToast: (state, { payload }) => {
      state.showToast = payload.showToast;
    },
    setFeedbackMessage: (state, { payload }) => {
      state.feedbackMessage = payload.message;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setLoading, setToast, setFeedbackMessage } = uiSlice.actions;

export default uiSlice.reducer;
