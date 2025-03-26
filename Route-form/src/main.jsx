import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'

import NotFoundPage from './pages/NotFoundPage .jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import FavoritesDetailPage from './pages/FavoritesDetailPage.jsx'
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: <App />, // Render the App component
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/fav",
        element: <FavoritesPage />,
      },
      {
        path: "/fav/:id",
        element: <FavoritesDetailPage/>,
      },
    ],
  },
  {
    path: "signup",
    element: <SignUpPage />,
  },
  {
    path: "*", // Fallback route for all unmatched paths
    element: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>
);
 