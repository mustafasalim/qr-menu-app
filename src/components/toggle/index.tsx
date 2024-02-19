import classNames from "classnames"
import { useDispatch } from "react-redux"
import { _toggleSwitch } from "../../context/toggleOnOff"

interface toggleOptions {
  title: string
}

function Toggle({ title }: toggleOptions) {
  const dispatch = useDispatch()

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={() => dispatch(_toggleSwitch(true))}
      />
      <div
        className={classNames(
          "relative  bg-gray-200 w-14 h-7 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        )}
      ></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {title}
      </span>
    </label>
  )
}

export default Toggle
