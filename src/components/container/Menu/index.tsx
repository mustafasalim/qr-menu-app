import { NavLink } from "react-router-dom"

interface menuProp {
  menuTitle: any
}

function Menu(props: menuProp) {
  const { menuTitle } = props
  return (
    <div className="group w-full flex  items-center text-[#FEF7EE]  menu overflow-x-scroll lg:overflow-auto lg:justify-center p-4  gap-x-5 overflow-hidden font-semibold">
      {menuTitle.map((menu: any, index: number) => (
        <NavLink
          key={index}
          className="w-[140px]  text-center shadow  bg-[#1B1D1F] hover:text-[#e7e4e1] transition-all py-2 p-4 rounded-2xl whitespace-nowrap"
          to={menu.path}
        >
          {menu.element}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu
