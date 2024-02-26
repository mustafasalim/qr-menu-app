import { useState } from "react"
import DasboardMenu from "../../../container/menu"
import UserCards from "../../../container/userCard"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { IoMenu } from "react-icons/io5"

function Header() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 3 }}
      >
        <header
          className={`lg:w-[300px] lg:flex bg-white  pt-20 h-screen border-r border-dashed border-b sticky top-0 flex-col  p-6 gap-y-10 ${
            isVisible ? "flex" : "hidden"
          }`}
        >
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
      </motion.div>
      <button
        className="absolute top-0 left-0 p-2 lg:hidden flex"
        onClick={toggleVisibility}
      >
        <IoMenu className="text-[40px]" />
      </button>
    </>
  )
}

export default Header
