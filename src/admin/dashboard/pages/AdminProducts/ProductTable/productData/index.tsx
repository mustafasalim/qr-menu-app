import * as React from "react"
import Box from "@mui/material/Box"
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridTreeNodeWithRender,
} from "@mui/x-data-grid"
import { Button, Chip } from "@mui/material"
import { FaTrashCan } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa"
import { createModal } from "../../../../../../store/modal/hook"
import { AppDispatch, RootState } from "../../../../../../store/store"
import {
  deleteProductById,
  fetchAllProducts,
} from "../../../../../../store/thunk/productsThunk/fetchThunk"

import { useDispatch, useSelector } from "react-redux"

const columns: GridColDef[] = [
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
    field: "category",
    headerName: "Category",
    width: 150,
    sortable: false,
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
    field: "rating",
    headerName: "Rating",
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
  const dispatch = useDispatch<AppDispatch>()
  const [productIds, setProductIds] = React.useState<any>([])
  const handleDeleteClick = async () => {
    try {
      await dispatch(deleteProductById(productIds)).then(() => {
        dispatch(fetchAllProducts())
      })
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])
  const data = useSelector((state: RootState) => state.productsSlice.products)
  console.log(data)

  return (
    <>
      <Box sx={{ height: 400 }}>
        <DataGrid
          getRowId={(row) => row?._id}
          rows={data}
          columns={columns}
          onRowSelectionModelChange={(newRowSelectionModel: any) => {
            setProductIds(newRowSelectionModel)
          }}
          rowSelectionModel={productIds}
          checkboxSelection
        />
        {productIds.length > 0 && (
          <div className=" flex items-center text-[15px] text-red-500 cursor-pointer hover:text-red-700">
            <Button
              onClick={handleDeleteClick}
              color="error"
              className="flex items-center"
            >
              <FaTrashCan />
              <span>({productIds.length})</span>
            </Button>
          </div>
        )}
      </Box>
    </>
  )
}
