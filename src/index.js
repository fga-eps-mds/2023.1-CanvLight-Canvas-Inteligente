import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/home/Home';
import Canvas from './pages/canvas/Canvas';

const router = createBrowserRouter([
  {
    path: "/2023.1-CanvLight-Canvas-Inteligente",
    element: <Home />,
  },
  {
    path: "canvas",
    element: <Canvas />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
