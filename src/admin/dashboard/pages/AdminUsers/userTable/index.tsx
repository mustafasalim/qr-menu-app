import { Box, Button } from "@mui/material"

import { FaTrashCan } from "react-icons/fa6"

import React from "react"
import { toast } from "react-hot-toast"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { users } from "../../../../../constant/users"
import { FaEdit } from "react-icons/fa"
import { createModal } from "../../../../../store/modal/hook"

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "userName",
    headerName: "Name",
    width: 150,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "password",
    headerName: "password",
    width: 200,
    sortable: false,
    disableColumnMenu: true,
    renderCell: () => {
      return <div>***************</div>
    },
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 200,

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
  const [rowSelectionModel, setRowSelectionModel] = React.useState<any>([])

  const handleDeleteClick = () => {
    toast.success(rowSelectionModel + " " + "product deleted")
  }

  return (
    <>
      <Box sx={{ height: 400 }}>
        <DataGrid
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
