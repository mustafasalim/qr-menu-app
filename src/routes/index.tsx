import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: "",
      },
      {
        path: "/login",
        element: "login",
      },
    ],
  },
])
