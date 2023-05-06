import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { AdminRoutes } from '../admin/router/AdminRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, photoUrl, email, displayName } = user;
      dispatch(login({ uid, photoUrl, email, displayName }));
    });
  }, []);

  return (
    <Routes>
      {status === 'authenticated' && (
        <Route path="/admin/*" element={<AdminRoutes></AdminRoutes>}></Route>
      )}
      <Route path="/auth/*" element={<AuthRoutes></AuthRoutes>}></Route>
      <Route path="/" element={<Navigate to="/auth/login"></Navigate>}></Route>
    </Routes>
  );
};
