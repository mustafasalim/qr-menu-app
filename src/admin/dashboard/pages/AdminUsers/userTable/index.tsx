import { Alert, Menu, MenuItem, Snackbar } from "@mui/material"
import { MenuProps } from "@mui/material/Menu"
import IconButton from "@mui/material/IconButton"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { styled, alpha } from "@mui/material/styles"
import { FaTrashCan } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa"
import React from "react"

function UsersTable({ users, data, setData }: any) {
  const [openToast, setOpenToast] = React.useState(false)

  const handleClickToast = () => {
    setOpenToast(true)
  }

  const handleCloseToast = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }

    setOpenToast(false)
  }
  const handleDeleteClick = () => {
    setData(() => {
      const user = data.filter((x: any) => x.id !== users.id)
      return [...user]
    })
    handleClickToast()
  }

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

  return (
    <div>
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
            <MenuItem
              onClick={() => {
                handleDeleteClick()
                handleClose()
              }}
              className="flex items-center justify-center !font-bold gap-x-2 !text-red-500"
            >
              <FaTrashCan className="text-[15px] " />
              <span>Delete</span>
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
      <Snackbar
        open={openToast}
        autoHideDuration={6000}
        onClose={handleCloseToast}
      >
        <Alert
          onClose={handleCloseToast}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Successfuly
        </Alert>
      </Snackbar>
    </div>
  )
}

export default UsersTable
