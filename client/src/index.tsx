import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { useRoutes } from './routes/useRoutes';

const App = () => {
  const router = useRoutes();
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          style: {
            fontSize: '14px',
            width: '175px'
          },
          position: 'top-right'
        }}
      />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
