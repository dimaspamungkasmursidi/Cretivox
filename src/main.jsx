import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/404.jsx'
import Home from './pages/Home.jsx'
import Intro from './pages/Intro.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Intro />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
