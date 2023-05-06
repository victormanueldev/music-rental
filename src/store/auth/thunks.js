import {
  loginWithEmailAndPassword,
  registerUserWithEmailAndPassword
} from '../../firebase/providers';
import { checkingCredentials, clearError, login, logout } from './';

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startCreatingUserWithEmailAndPassword = ({ displayName, email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoUrl, errorMessage } = await registerUserWithEmailAndPassword({
      displayName,
      email,
      password
    });

    if (!ok) {
      setTimeout(() => {
        dispatch(clearError());
      }, 5000);
      return dispatch(logout({ errorMessage }));
    }
    dispatch(login({ uid, displayName, email, photoUrl }));
  };
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoUrl, displayName, errorMessage } = await loginWithEmailAndPassword({
      email,
      password
    });
    if (!ok) {
      setTimeout(() => {
        dispatch(clearError());
      }, 5000);
      return dispatch(logout({ errorMessage }));
    }
    dispatch(login({ uid, photoUrl, displayName, email }));
  };
};
