import { Link } from "react-router-dom"
import { adminMenu } from "../../../../utils/adminMenu"

export default function DasboardMenu() {
  return (
    <>
      <div className="flex flex-col gap-x-2">
        {adminMenu.map((data: any, key) => (
          <Link
            key={key}
            className="flex text-sm  text-gray-500 items-center  p-2 px-6 py-4 gap-x-3 w-[200px] hover:bg-blue-200 hover:text-blue-500 transition-all rounded-lg"
            to={data.path}
          >
            <div>{data.icon}</div>
            <span>{data.title}</span>
          </Link>
        ))}
      </div>
    </>
  )
}
