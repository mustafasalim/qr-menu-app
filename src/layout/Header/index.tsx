import Menu from "./Menu"
import { menu } from "../../utils/menu"
import About from "../../components/About"

function Header() {
  return (
    <header className="w-full gap-y-10 h-[300px] relative lg:h-[600px] flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('./images/bg-cafe.jpg')]">
      <Menu menuTitle={menu} />
      <About />
    </header>
  )
}

export default Header
