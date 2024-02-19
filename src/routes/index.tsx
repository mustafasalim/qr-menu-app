import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/register",
        element: "register",
      },
      {
        path: "/login",
        element: "login",
      },
    ],
  },
])
