import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import GenerateResume from '../pages/GenerateResume';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import Profile from '../pages/Profile';
import ResumeBuilder from '../resume/ResumeBuilder';
import PdfViewer from '../resume/PdfViewer';
import HomePage from '../pages/Home';

export const useRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PrivateRoute />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/generate-resume',
          element: <GenerateResume />
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
