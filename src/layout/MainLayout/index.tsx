import { Outlet } from "react-router-dom"
import Snowfall from "react-snowfall"
import Header from "./Header"
import Menu from "../../components/container/Menu"
import { menu } from "../../utils/menu"
import { useSelector } from "react-redux"
import { RootState } from "../../context/store"
import Footer from "./footer"

function MainLayout() {
  const toggleState = useSelector((state: RootState) => state.toggle.value)
  const isToggle = toggleState === true ? "none" : ""
  return (
    <section className="bg-[#111315]">
      <Header />
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
