import { IconButton } from "@mui/material"
import { destroyAllModal } from "../../../../../../context/Modal/hook"
import { IoMdClose } from "react-icons/io"

function ModalHeader({ title }: any) {
  return (
    <div className="w-full h-14 flex items-center bg-[#F4F6F8] justify-between px-4 border-b border-dashed">
      <div className="text-[20px] font-bold text-blue-500">{title}</div>

      <IconButton
        className="!text-red-500"
        aria-label="add an alarm"
        onClick={() => destroyAllModal()}
      >
        <IoMdClose />
      </IconButton>
    </div>
  )
}

export default ModalHeader
