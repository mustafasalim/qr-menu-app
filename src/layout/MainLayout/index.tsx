import { Outlet } from "react-router-dom"
import Snowfall from "react-snowfall"
import Menu from "../../components/container/Menu"
import { menu } from "../../constant/menu"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import Footer from "./footer"

function MainLayout() {
  const toggleState = useSelector((state: RootState) => state.toggle.value)
  const isToggle = toggleState === true ? "none" : ""
  return (
    <section className="bg-[#111315]">
      <Menu menuTitle={menu} />
      <Snowfall
        style={{ display: `${isToggle}` }}
        snowflakeCount={150}
      />
      <Outlet />
      <Footer />
    </section>
  )
}
export default MainLayout
