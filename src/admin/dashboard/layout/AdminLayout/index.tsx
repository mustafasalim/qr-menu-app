import { Outlet } from "react-router-dom"
import Header from "../header"
import TitleHeader from "../titleHeader"

function AdminLayout() {
  return (
    <div>
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
