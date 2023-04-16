import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '../pages/DashboardPage';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<DashboardPage></DashboardPage>}></Route>
      <Route path="/" element={<Navigate to={'/admin/dashboard'}></Navigate>}></Route>
    </Routes>
  );
};
