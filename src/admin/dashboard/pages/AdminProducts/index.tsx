import { Button } from "@mui/material"
import { FaPlus } from "react-icons/fa"
import { createModal } from "../../../../context/Modal/hook"
import ProductTable from "./ProductTable"

function AdminProductsPage() {
  return (
    <section className="w-full h-screen flex items-start p-10 justify-center">
      <div className="lg:w-[1200px] flex flex-col gap-y-10">
        <div className="flex items-center justify-end">
          <Button
            onClick={() => createModal("addProduct")}
            startIcon={<FaPlus />}
            className="!bg-[#212B36] !text-[15px] !font-semibold !rounded-lg"
            variant="contained"
          >
            New Product
          </Button>
        </div>
        <ProductTable />
      </div>
    </section>
  )
}

export default AdminProductsPage
