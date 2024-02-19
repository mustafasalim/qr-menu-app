import ReactDOM from "react-dom/client"

import "./assets/css/tailwind.css"
import { router } from "./routes"
import { RouterProvider } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
)
