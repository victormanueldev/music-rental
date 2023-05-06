import { setLoading, setToast } from './uiSlice';

export const showLoading = () => {
  return (dispatch) => {
    dispatch(setLoading({ loading: true }));
  };
};

export const hideLoading = () => {
  return (dispatch) => {
    dispatch(setLoading({ loading: false }));
  };
};

export const showToast = () => {
  return (dispatch) => {
    dispatch(setToast({ showToast: true }));
  };
};

export const hideToast = () => {
  return (dispatch) => {
    dispatch(setToast({ showToast: false }));
  };
};
