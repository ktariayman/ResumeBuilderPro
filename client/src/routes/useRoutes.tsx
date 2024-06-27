import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import Profile from '../pages/Profile';
import ResumeBuilder from '../resume/ResumeBuilder';
import PdfViewer from '../resume/PdfViewer';

export const useRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PrivateRoute />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '/generate-resume',
          element: <ResumeBuilder />
        },
        {
          path: '/pdf-view',
          element: <PdfViewer />
        }
      ]
    },
    {
      path: '/',
      element: <PublicRoute />,
      children: [
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/register',
          element: <RegisterPage />
        }
      ]
    },
    {
      path: '*',
      element: <div>Page Not Found</div>
    }
  ]);

  return router;
};
