import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assets/fonts/Inter-Regular.ttf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminTable from "./container/AdminTable";
import ProductsPreview from "./container/ProductPreview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "admin-table",
    element: <AdminTable />,
  },
  {
    path: "product-preview",
    element: <ProductsPreview />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
