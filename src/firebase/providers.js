import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { FirebaseAuth } from './config';

export const registerUserWithEmailAndPassword = async ({ displayName, email, password }) => {
  try {
    const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoUrl } = res.user;
    await updateProfile(FirebaseAuth.currentUser, { displayName });
    return {
      ok: true,
      uid,
      photoUrl,
      email,
      displayName
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message.replace(/[fF]irebase:\s/, '')
    };
  }
};

export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoUrl, displayName } = res.user;
    return {
      ok: true,
      uid,
      photoUrl,
      email,
      displayName
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message.replace(/[fF]irebase:\s/, '')
    };
  }
};
