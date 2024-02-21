import { FaShoppingBag } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { AiFillDashboard } from "react-icons/ai"
import { MdMapsHomeWork } from "react-icons/md"

export const adminMenu = [
  {
    path: "dashboard/products",
    title: "Ürünler",
    icon: <FaShoppingBag size={20} />,
  },
  {
    path: "dashboard/users",
    title: "Kullanıcılar",
    icon: <FaUser size={20} />,
  },
  {
    path: "dashboard/performans",
    title: "Dashboard",
    icon: <AiFillDashboard size={20} />,
  },
  {
    path: "dashboard/Blog",
    title: "Blog",
    icon: <MdMapsHomeWork size={20} />,
  },
]
