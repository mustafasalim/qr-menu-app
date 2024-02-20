import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Product from "../../components/container/product"
import { coffees } from "../../utils/coffe"

const CategoryPage = () => {
  let { categorySlug } = useParams()
  const coffee = coffees

  console.log(coffee)

  useEffect(() => {
    console.log(categorySlug + "icin istege cıkıldı")
  }, [categorySlug])

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="w-[1200px] text-[35px] text-[#FEF7EE]">{categorySlug}</h1>
      <div className="w-[1200px] mt-10 items-center justify-between flex flex-wrap gap-4">
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
