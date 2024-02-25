import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Product from "../../components/ui/product"
import { coffees } from "../../constant/coffe"

const CategoryPage = () => {
  let { categorySlug } = useParams()
  const coffee = coffees

  useEffect(() => {
    console.log(categorySlug + "icin istege cıkıldı")
  }, [categorySlug])

  return (
    <div className="w-full lg:flex lg:flex-col items-center justify-center">
      <h1 className="lg:w-[1200px] flex items-center justify-center lg:justify-start text-[35px] text-[#FEF7EE]">
        {categorySlug}
      </h1>
      <div className="lg:w-[1200px] items-center justify-center mt-10 lg:items-center lg:justify-between lg:flex lg:flex-wrap  grid gap-4 lg:gap-4">
        {coffee.map((product) => (
          <Product
            productImg={product.image}
            productTitle={product.name}
            productPrice={product.price}
            popular={product.popular}
            stock={product.stock}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
