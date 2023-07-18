import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Canvas from "./pages/canvas/Canvas";
import Tutorial from "./pages/tutorial/Tutorial";

const router = createBrowserRouter([
  {
    path: "/2023.1-CanvLight-Canvas-Inteligente",
    element: <Home />,
  },
  {
    path: "/2023.1-CanvLight-Canvas-Inteligente/canvas",
    element: <Canvas />,
  },
  {
    path: "/2023.1-CanvLight-Canvas-Inteligente/tutorial",
    element: <Tutorial />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
