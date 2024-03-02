import Snowfall from "react-snowfall"
import { _backgroundColor, _color } from "../../../store/apperance"

function Header() {
  return (
    <header className=" w-full lg:h-[400px] h-[300px] flex items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('https://coffe-app-jade.vercel.app/images/bg-cafe.jpg')]">
      <Snowfall
        style={{ position: "relative" }}
        snowflakeCount={50}
      />
    </header>
  )
}

export default Header
