import { Outlet } from "react-router-dom"
import Header from "../header"
import TitleHeader from "../titleHeader"
import { useModals } from "../../../../context/Modal/hook"
import Modal from "../../container/modals"

function AdminLayout() {
  const modals = useModals()

  return (
    <div>
      {modals.length > 0 && <Modal />}
      <div className="flex mx-auto bg-[#F9FAFB]">
        <Header />

        <div className="w-full">
          <TitleHeader />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
