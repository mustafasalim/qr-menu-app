import { useModals } from "../../../../../store/modal/hook"
import ProductForm from "../../formik/product-form"

function ProductAddOrUpdateModal({ mode }: any) {
  const data = useModals()
  const productData = data.map((d: any) => {
    return d.data
  })

  return (
    <section className="p-4 border rounded-lg">
      {mode === "CREATE" && <ProductForm />}
      {mode === "EDIT" && <ProductForm data={productData[0]} />}
    </section>
  )
}

export default ProductAddOrUpdateModal
