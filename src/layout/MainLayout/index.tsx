import { Outlet } from "react-router-dom"
import Snowfall from "react-snowfall"
import Header from "../Header"
import Menu from "../../components/Menu"
import { menu } from "../../utils/menu"
function MainLayout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Menu menuTitle={menu} />
      <Snowfall snowflakeCount={90} />
    </>
  )
}
export default MainLayout
