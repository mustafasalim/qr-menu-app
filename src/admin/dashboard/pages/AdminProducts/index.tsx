import { Button } from "@mui/material"
import { FaPlus } from "react-icons/fa"
import { createModal, useModals } from "../../../../store/modal/hook"
import DataGridDemo from "./ProductTable/productData"

function AdminProductsPage() {
  const modal = useModals()
  console.log(modal)

  return (
    <section className="w-full flex items-start p-10 justify-center">
      <div className="lg:w-[1200px] w-[350px] flex flex-col gap-y-10">
        <div className="flex items-center justify-end">
          <Button
            onClick={() => {
              createModal("addProduct")
            }}
            startIcon={<FaPlus />}
            className="!bg-[#212B36] !text-[15px] !font-semibold !rounded-lg"
            variant="contained"
          >
            New Product
          </Button>
        </div>

        <DataGridDemo />
      </div>
    </section>
  )
}

export default AdminProductsPage
