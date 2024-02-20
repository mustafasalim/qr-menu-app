import classNames from "classnames"
import { useDispatch } from "react-redux"
import { _toggleSwitch } from "../../../context/toggleOnOff"

interface toggleOptions {
  imgUrl?: string
  variant?: string
}

function Toggle(props: toggleOptions) {
  const { imgUrl, variant } = props
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
          `relative after:bg-cover after:bg-center after:bg-[url('${imgUrl}')] bg-gray-200 w-14 h-7   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`,
          {
            "peer-checked:bg-red-600": variant === "red",
            "peer-checked:bg-yellow-600": variant === "warning",
          }
        )}
      ></div>
    </label>
  )
}

export default Toggle
