import { Box, Button } from "@mui/material"
import { FaTrashCan } from "react-icons/fa6"
import React, { useEffect } from "react"
import { toast } from "react-hot-toast"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { FaEdit } from "react-icons/fa"
import { createModal } from "../../../../../store/modal/hook"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../../../store/store"
import {
  fetchDeleteUsers,
  fetchGetAllUsers,
} from "../../../../../store/thunk/usersThunk/fetchThunk"

const columns: GridColDef[] = [
  {
    field: "image",
    type: "actions",
    headerName: "image",
    renderCell: (): any => {
      return (
        <div className="flex overflow-hidden rounded-lg">
          <img
            className="!w-10 !h-10 object-cover"
            src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_12.jpg"
            alt=""
          />
        </div>
      )
    },
  },
  {
    field: "username",
    headerName: "Name",
    width: 150,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    sortable: false,
    disableColumnMenu: true,
  },

  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 150,

    renderCell: (props) => {
      return (
        <button onClick={() => createModal("registerUpdate", props.row)}>
          <FaEdit className="text-[18px] text-[#212B36]" />
        </button>
      )
    },
  },
]

function UsersTable() {
  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector((state: RootState) => state.usersSlice.users)
  console.log(users)

  const [rowSelectionModel, setRowSelectionModel] = React.useState<any>([])

  const handleDeleteClick = () => {
    dispatch(fetchDeleteUsers(rowSelectionModel)).then(() => {
      dispatch(fetchGetAllUsers())
      toast.success("success deleted user")
    })
  }

  useEffect(() => {
    dispatch(fetchGetAllUsers())
  }, [dispatch])

  return (
    <>
      <Box sx={{ height: 400 }}>
        <DataGrid
          getRowId={(row) => row?._id}
          rows={users}
          columns={columns}
          onRowSelectionModelChange={(newRowSelectionModel: any) => {
            setRowSelectionModel(newRowSelectionModel)
          }}
          rowSelectionModel={rowSelectionModel}
          checkboxSelection
        />
        {rowSelectionModel.length > 0 && (
          <div className=" flex items-center text-[15px] text-red-500 cursor-pointer hover:text-red-700">
            <Button
              onClick={handleDeleteClick}
              color="error"
              className="flex items-center"
            >
              <FaTrashCan />
              <span>({rowSelectionModel.length})</span>
            </Button>
          </div>
        )}
      </Box>
    </>
  )
}

export default UsersTable
