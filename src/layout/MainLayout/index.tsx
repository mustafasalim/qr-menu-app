import { Outlet } from "react-router-dom"
import Snowfall from "react-snowfall"
import Header from "../Header"
import Menu from "../../components/Menu"
import { menu } from "../../utils/menu"
import { useSelector } from "react-redux"
import { RootState } from "../../context/store"

function MainLayout() {
  const toggleState = useSelector((state: RootState) => state.toggle.value)
  const isToggle = toggleState === true ? "none" : ""
  return (
    <>
      <Header />
      <Menu menuTitle={menu} />
      <Snowfall
        style={{ display: `${isToggle}` }}
        snowflakeCount={150}
      />
      <Outlet />
    </>
  )
}
export default MainLayout
