import { Outlet, useNavigate } from "react-router-dom"
import Header from "./header"
import TitleHeader from "./titleHeader"
import { useModals } from "../../../../store/modal/hook"
import Modal from "../../container/modals"
import { Toaster } from "react-hot-toast"
import { useEffect } from "react"

function AdminLayout() {
  const modals = useModals()
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  if (token) {
    return (
      <div className="relative">
        {modals.length > 0 && <Modal />}
        <div className="flex mx-auto ">
          <div className=" z-20 absolute top-0">
            <Header />
          </div>

          <div className="w-full">
            <TitleHeader />
            <Outlet />
            <Toaster />
          </div>
        </div>
      </div>
    )
  } else {
    useEffect(() => {
      navigate("/login")
    }, [token])
  }
}

export default AdminLayout
