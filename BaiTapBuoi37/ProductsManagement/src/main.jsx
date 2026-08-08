import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Categories from "./components/Categories/categories.jsx";
import ProductGrid from "./components/Product/productGrid.jsx";
import HomePage from "./components/index.jsx";
import ProductDetail from "./components/Product/ProductDetail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductGrid />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
