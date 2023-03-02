import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assets/fonts/Inter-Regular.ttf";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminTable from "./container/AdminTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "admintable",
    element: <AdminTable />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
