import { NavLink } from "react-router-dom"

interface menuProp {
  menuTitle: any
}

function Menu(props: menuProp) {
  const { menuTitle } = props
  return (
    <div className="group w-full flex items-center  justify-center p-4 gap-x-0.5 lg:p-2 lg:gap-x-5  overflow-hidden  bg-[#1B1A1F] text-[#e7e4e1] font-semibold">
      {menuTitle.map((menu: any, index: number) => (
        <NavLink
          key={index}
          className="w-[140px]  text-center hover:bg-[#252527] transition-all p-4 rounded-3xl whitespace-nowrap"
          to={menu.path}
        >
          {menu.element}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu
