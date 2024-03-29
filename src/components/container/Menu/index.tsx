import { NavLink } from "react-router-dom"

interface menuProp {
  menuTitle: any
}

function Menu(props: menuProp) {
  const { menuTitle } = props
  return (
    <div className="group w-full flex  items-center text-[color:var(--color-primary)]  menu overflow-x-scroll lg:overflow-auto lg:justify-center p-4  gap-x-5 overflow-hidden font-semibold">
      {menuTitle.map((menu: any, index: number) => (
        <NavLink
          key={index}
          className="w-[140px]  text-center shadow  bg-[color:var(--background-third)] hover:text-[color:var(--color-primary)] transition-all py-2 p-4 rounded-md whitespace-nowrap"
          to={menu.path}
        >
          {menu.element}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu
