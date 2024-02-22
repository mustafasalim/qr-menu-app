import { users } from "../../../../../utils/users"
import { Menu, MenuItem } from "@mui/material"
import { MenuProps } from "@mui/material/Menu"
import IconButton from "@mui/material/IconButton"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { styled, alpha } from "@mui/material/styles"
import React from "react"
import { FaTrashCan } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa"

function UsersTable() {
  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "bottom",
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
  const user = users
  return (
    <div className="w-full  shadow rounded-2xl overflow-hidden text-[15px]">
      <div className="w-full flex items-center  bg-[#F4F6F8] font-bold justify-between p-6 text-grey-300">
        <div className="flex border-r">
          <div className="w-56 overflow-hidden flex items-center gap-x-2 ">
            <span>Kullanıcı Adı</span>
          </div>
          <div className="w-[300px] overflow-hidden flex items-center gap-x-2">
            <span>E-mail</span>
          </div>
          <div className="w-[300px] overflow-hidden flex items-center gap-x-2">
            <span>password</span>
          </div>
        </div>
        <div>Yönet</div>
      </div>
      {user.map((users) => (
        <div className="w-full flex justify-between items-center text-[15px] font-thin text-[#212B36] hover:bg-slate-100 transition-all border-b border-dashed p-6 h-20">
          <div className="flex border-r">
            <div className="w-56 overflow-hidden flex items-center gap-x-2">
              <span> {users.userName}</span>
            </div>
            <div className="w-[300px] overflow-hidden flex items-center gap-x-2">
              <span>{users.email}</span>
            </div>
            <div className="w-[300px] overflow-hidden flex items-center gap-x-2">
              <span className="font-bold">{users.şifre}</span>
            </div>
          </div>
          <div className="flex gap-x-4">
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <StyledMenu
              className="!rounded-2xl"
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem className="flex items-center !font-bold justify-center gap-x-2">
                <FaEdit className="text-[15px]" />
                <span>Edit</span>
              </MenuItem>
              <MenuItem className="flex items-center justify-center !font-bold gap-x-2 !text-red-500">
                <FaTrashCan className="text-[15px] " />
                <span>Delete</span>
              </MenuItem>
            </StyledMenu>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UsersTable
