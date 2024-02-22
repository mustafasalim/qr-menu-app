import AddProductsModal from "./dashboard/container/modals/addProductsModal"
import LoginModal from "./dashboard/container/modals/loginModal"
import RegisterModal from "./dashboard/container/modals/registerModal"

const allModal = [
  {
    name: "login",
    element: <LoginModal />,
  },
  {
    name: "register",
    element: <RegisterModal />,
  },
  {
    name: "addProduct",
    element: <AddProductsModal />,
  },
]

export default allModal
