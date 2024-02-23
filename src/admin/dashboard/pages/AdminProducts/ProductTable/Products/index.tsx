import { IconButton, Menu, MenuProps, alpha, styled } from "@mui/material"
import Chip from "@mui/material/Chip"
import { MenuItem } from "@mui/material"
import React from "react"

import MoreVertIcon from "@mui/icons-material/MoreVert"

import { FaTrashCan } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa"

interface productProps {
  product: any
}

function Products({ product }: productProps) {
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
    <div className="w-full pl-4 h-[100px] flex items-center text-[#212B36] border-b border-dashed">
      <div className="h-full flex items-center ">
        <div className="w-[286px] h-full flex items-center gap-x-2">
          <input
            className="cursor-pointer"
            type="checkbox"
          />
          <div className="flex rounded-lg overflow-hidden ">
            <img
              className="object-cover w-[64px] h-[64px] "
              src={product.image}
              alt=""
            />
          </div>
          <div className="flex flex-col w-[180px]">
            <div className=" text-ellipsis overflow-hidden ">
              {product.name}
            </div>
            <div className="text-[#9fa0a1]">{product.categories}</div>
          </div>
        </div>
        <div className="w-[265px] flex h-full items-center justify-start">
          {product.stock === false ? (
            <Chip
              size="small"
              label="out of stock"
              className="!text-red-500 !border-red-500"
              variant="outlined"
            />
          ) : (
            <Chip
              size="small"
              label="in stock"
              color="success"
              variant="outlined"
            />
          )}
        </div>
        <div className="w-[266px] flex items-center justify-start">
          ${product.price}
        </div>
      </div>
      <div className="w-[264px] flex h-full items-center justify-start">
        {product.popular === true ? (
          <Chip
            size="small"
            label="Popular"
            className="!bg-yellow-500 !text-yellow-100"
          />
        ) : (
          <Chip
            size="small"
            label="unpopular"
          />
        )}
      </div>
      <div>
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
  )
}

export default Products
