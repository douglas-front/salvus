import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styleguide.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Management from "./routes/Management";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/management",
    element: <Management />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
