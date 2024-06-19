import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../stores/auth.store';

const PublicRoute = () => {
  const user = useAuthStore();

  return !user ? <Navigate to='/' /> : <Outlet />;
};

export default PublicRoute;
