import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import CategoryPage from "../pages/category"
import CategoriesPage from "../pages/categories"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: "ana sayfas",
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
])
