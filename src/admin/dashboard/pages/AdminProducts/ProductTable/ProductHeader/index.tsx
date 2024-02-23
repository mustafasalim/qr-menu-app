import { TextField } from "@mui/material"

function ProductHeader() {
  return (
    <div className="w-full  flex flex-col items-center justify-start ">
      <div className="flex p-4 gap-x-4 w-full">
        <div>
          <TextField
            label="Search"
            id="outlined-size-small"
            size="small"
          />
        </div>
      </div>
      <div className="bg-[#F4F6F8] pl-4 text-[#777777] font-semibold w-full flex h-14 items-center justify-between">
        <div className="flex gap-x-2">
          <input type="checkbox" />
          <div className="w-[100px] h-full flex items-center justify-start ">
            Product
          </div>
        </div>
        <div className="w-[100px] h-full flex items-center justify-start ">
          Stock
        </div>
        <div className="w-[100px] h-full flex items-center justify-start ">
          Price
        </div>
        <div className="w-[100px] h-full flex items-center justify-start ">
          Popular
        </div>
        <div className="w-[100px] h-full flex items-center justify-start ">
          settings
        </div>
      </div>
    </div>
  )
}

export default ProductHeader
