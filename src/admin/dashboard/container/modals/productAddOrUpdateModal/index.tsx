import ProductForm from "../../formik/product-form"

function ProductAddOrUpdateModal({ mode }: any) {
  console.log(mode)

  return (
    <section className="grid gap-4">
      <ProductForm />
    </section>
  )
}

export default ProductAddOrUpdateModal
