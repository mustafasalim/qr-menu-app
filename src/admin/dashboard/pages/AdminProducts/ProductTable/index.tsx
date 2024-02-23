import { coffees } from "../../../../../utils/coffe"
import ProductHeader from "./ProductHeader"
import Products from "./Products"

function ProductTable() {
  const product = coffees
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg border">
      <ProductHeader />
      {product.map((products) => (
        <Products product={products} />
      ))}
    </div>
  )
}

export default ProductTable
