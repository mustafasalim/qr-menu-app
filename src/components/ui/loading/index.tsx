import { FaSpinner } from "react-icons/fa"

function Loading() {
  return (
    <div className="mt-[150px] mb-[150px] flex animate-spin text-white">
      <FaSpinner className="text-[34px]" />
    </div>
  )
}

export default Loading
