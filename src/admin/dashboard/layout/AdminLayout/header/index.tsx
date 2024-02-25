import DasboardMenu from "../../../container/menu"
import UserCards from "../../../container/userCard"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="w-[300px] h-screen border-r border-dashed border-b sticky top-0 flex flex-col p-6  gap-y-10">
      <Link to="/admin">
        <img
          width={200}
          src="https://companieslogo.com/img/orig/LKNCY_BIG-36053844.png?t=1697718890"
          alt=""
        />
      </Link>
      <UserCards />
      <DasboardMenu />
    </header>
  )
}

export default Header
