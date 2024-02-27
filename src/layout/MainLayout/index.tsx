import { Outlet } from "react-router-dom"
import Menu from "../../components/container/Menu"
import { menu } from "../../constant/menu"
import Footer from "./footer"
import Header from "./Header"

function MainLayout() {
  return (
    <section className="bg-[#111315]">
      <Header />
      <Menu menuTitle={menu} />
      <Outlet />
      <Footer />
    </section>
  )
}
export default MainLayout
