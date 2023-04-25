import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { HomePage } from './pages/Home/HomePage';
import { CatDetails } from './pages/CatDetails/CatDetails';
import { MyProfile } from './pages/MyProfile/MyProfile';
import { RandomCat } from './pages/RandomCat/RandomCat';
import { MyCats } from './pages/MyCats/MyCats';
import { UserProvider } from './shared/userContext';

const router = createBrowserRouter([
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Register',
    element: <Register />,
  },
  {
    path: '/HomePage',
    element: <HomePage />,
  },
  {
    path: '/HomePage/:id',
    element: <CatDetails isRandomCat={false} />,
  },
  {
    path: '/MyProfile',
    element: <MyProfile />,
  },
  {
    path: '/RandomCat',
    element: <RandomCat />,
  },
  {
    path: 'MyCats',
    element: <MyCats />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);
