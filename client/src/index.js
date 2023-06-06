import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CoachingPage from './pages/CoachingPage';
import ConsultingPage from './pages/ConsultingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/coaching',
    element: <CoachingPage />
  },
  {
    path: '/consulting',
    element: <ConsultingPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
