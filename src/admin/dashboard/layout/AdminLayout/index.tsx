import { Outlet } from "react-router-dom"
import Header from "./header"
import TitleHeader from "./titleHeader"
import { useModals } from "../../../../store/modal/hook"
import Modal from "../../container/modals"
import { Toaster } from "react-hot-toast"

function AdminLayout() {
  const modals = useModals()

  return (
    <div>
      {modals.length > 0 && <Modal />}
      <div className="flex mx-auto bg-[#F9FAFB]">
        <div className="z-5">
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
}

export default AdminLayout
