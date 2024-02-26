import LoginModal from "./src/admin/dashboard/container/modals/loginModal"
import ProductAddOrUpdateModal from "./src/admin/dashboard/container/modals/productAddOrUpdateModal"
import RegisterAddOrUpdateModal from "./src/admin/dashboard/container/modals/registerModal"

const allModal = [
  {
    name: "login",
    element: <LoginModal />,
  },
  {
    name: "register",
    element: <RegisterAddOrUpdateModal mode="REGISTER" />,
  },
  {
    name: "registerUpdate",
    element: <RegisterAddOrUpdateModal mode="EDIT" />,
  },
  {
    name: "addProduct",
    element: <ProductAddOrUpdateModal mode="CREATE" />,
  },
  {
    name: "productUpdate",
    element: <ProductAddOrUpdateModal mode="EDIT" />,
  },
]

export default allModal
