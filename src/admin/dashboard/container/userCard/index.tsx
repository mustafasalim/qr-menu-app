import Avatar from "@mui/material/Avatar"
import * as React from "react"
import Popover from "@mui/material/Popover"
import { Button } from "@mui/material"
function UserCards() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  return (
    <>
      <button
        onClick={handleClick}
        className="flex w-[200px] overflow-hidden p-2 px-4 items-center justify-center gap-x-3 bg-[#EDEFF1] rounded-lg hover:text-blue-500 hover:bg-blue-100 transition-all cursor-pointer"
      >
        <Avatar
          alt="Remy Sharp"
          src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_25.jpg"
        />
        <span className="text-sm">Mustafa salim</span>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Button className="flex p-2 rounded-md !font-bold !bg-red-500 !text-red-300 ">
          Çıkış yap
        </Button>
      </Popover>
    </>
  )
}

export default UserCards
