import { useSelector } from "react-redux"
import Snowfall from "react-snowfall"
import { RootState } from "../../../store/store"

function Header() {
  const toggleState = useSelector((state: RootState) => state.toggle.value)
  const isToggle = toggleState === true ? "none" : ""
  return (
    <header className=" w-full lg:h-[400px] h-[300px] flex items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('https://coffe-app-jade.vercel.app/images/bg-cafe.jpg')]">
      <Snowfall
        style={{ display: `${isToggle}`, position: "relative" }}
        snowflakeCount={50}
      />
      <hr />
    </header>
  )
}

export default Header
