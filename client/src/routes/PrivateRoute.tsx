// src/routes/PrivateRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../stores/auth.store';
import Layout from '../Layout/Layout';

const PrivateRoute = () => {
  const { user } = useAuthStore();

  return user ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to='/login' />
  );
};

export default PrivateRoute;
