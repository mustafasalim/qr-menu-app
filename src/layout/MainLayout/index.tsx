import { Outlet } from "react-router-dom"
import Snowfall from "react-snowfall"
import Header from "../Header"
function MainLayout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Snowfall snowflakeCount={90} />
    </>
  )
}
export default MainLayout
