import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './app/app';
import { BookCollection, Library, Login } from '@shared/react';
import React from 'react';

// TODO:AuthGuard
// const AuthGuard = ({ element }) => {
//   const isAuthenticated = localStorage.getItem('authToken');
//   if (!isAuthenticated) {
//     return <Navigate to="/auth/login" replace />;
//   }
//   return element;
// };

const router = createBrowserRouter([
  {
    path: '/auth',
    children: [{ path: 'login', element: <Login /> }],
  },
  {
    path: '/',
    element: <App />,
    //   element: <AuthGuard element={<App />} />,
    children: [
      {
        path: '',
        element: <Library />,
      },
      {
        path: 'book-collection',
        element: <BookCollection />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
