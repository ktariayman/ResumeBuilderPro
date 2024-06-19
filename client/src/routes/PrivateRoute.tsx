// routes/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../stores/auth.store';

const PrivateRoute = () => {
  const { user } = useAuthStore();

  return user ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
