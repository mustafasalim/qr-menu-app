import * as React from "react"
import Box from "@mui/material/Box"
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridTreeNodeWithRender,
} from "@mui/x-data-grid"
import { coffees } from "../../../../../../constant/coffe"
import { Button, Chip } from "@mui/material"
import { FaTrashCan } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa"
import { toast } from "react-hot-toast"
import { createModal } from "../../../../../../store/modal/hook"

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "image",
    type: "actions",
    headerName: "image",
    renderCell: (
      data: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>
    ): any => {
      return (
        <div className="flex overflow-hidden rounded-lg">
          <img
            className="!w-10 !h-10 object-cover"
            src={data.row.image}
            alt=""
          />
        </div>
      )
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "popular",
    headerName: "Popular",
    width: 150,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (
      data: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>
    ): any => {
      return (
        <>
          {data.row.popular === true ? (
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
        </>
      )
    },
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 110,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (
      data: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>
    ): any => {
      return (
        <>
          {data.row.stock === false ? (
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
        </>
      )
    },
  },

  {
    field: "price",
    headerName: "Price(TL)",
    type: "number",
    width: 110,
    sortable: false,
    disableColumnMenu: true,
  },

  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 100,

    renderCell: (props) => {
      return (
        <button onClick={() => createModal("productUpdate", props.row)}>
          <FaEdit className="text-[18px] text-[#212B36]" />
        </button>
      )
    },
  },
]

export default function DataGridDemo() {
  const data = coffees
  const [rowSelectionModel, setRowSelectionModel] = React.useState<any>([])

  const handleDeleteClick = () => {
    toast.success(rowSelectionModel + " " + "product deleted")
  }

  return (
    <>
      <Box sx={{ height: 400 }}>
        <DataGrid
          rows={data}
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
