import Avatar from "@mui/material/Avatar"
import * as React from "react"
import { Menu, MenuItem, MenuProps, alpha, styled } from "@mui/material"
import { IoLogOut } from "react-icons/io5"
function UserCards() {
  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 10,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(244, 246, 248) 0px 0px 0px 0px, rgb(244, 246, 248) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 2px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }))
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

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

      <StyledMenu
        className="!rounded-2xl"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem className="flex items-center justify-center !font-bold gap-x-2 !text-red-500">
          <IoLogOut className="text-[22px]" />
          <span>Log out</span>
        </MenuItem>
      </StyledMenu>
    </>
  )
}

export default UserCards
