import ProductForm from "../../formik/product-form"

function ProductAddOrUpdateModal({ mode }: any) {
  console.log(mode)

  return (
    <section className="p-4 border rounded-lg">
      <ProductForm />
    </section>
  )
}

export default ProductAddOrUpdateModal
