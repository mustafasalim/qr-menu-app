import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import CategoryPage from "../pages/category"
import CategoriesPage from "../pages/categories"
import AdminLayout from "../admin/dashboard/layout/AdminLayout"
import AdminHome from "../admin/dashboard/pages/AdminHome"
import AdminProductsPage from "../admin/dashboard/pages/AdminProducts"
import AdminUsers from "../admin/dashboard/pages/AdminUsers"
import Blog from "../admin/dashboard/pages/blog"
import PerformansPage from "../admin/dashboard/pages/AdminPerformancePage"
import Home from "../pages/home"
import Login from "../pages/authPages/login"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "kategoriler",
        children: [
          {
            index: true,
            element: <CategoriesPage />,
          },
          {
            path: ":categorySlug",
            element: <CategoryPage />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "dashboard",
        children: [
          {
            path: "blog",
            element: <Blog />,
          },
          {
            path: "users",
            element: <AdminUsers />,
          },
          {
            path: "performans",
            element: <PerformansPage />,
          },
          {
            path: "products",
            element: <AdminProductsPage />,
          },
        ],
      },
    ],
  },
])
