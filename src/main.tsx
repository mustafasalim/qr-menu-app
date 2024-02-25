import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import "./assets/css/tailwind.css"
import { router } from "./routes"
import { RouterProvider } from "react-router-dom"
import { store } from "./store/store"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
