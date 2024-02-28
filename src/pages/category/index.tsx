import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Product from "../../components/ui/product"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { fetchAllProducts } from "../../store/thunk/productsThunk/fetchThunk"

const CategoryPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  let { categorySlug } = useParams()

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  const coffee = useSelector((state: RootState) => state.productsSlice.products)

  return (
    <div className="w-full lg:flex lg:flex-col items-center justify-center">
      <h1 className="lg:w-[1200px] flex items-center justify-center lg:justify-start text-[35px] text-[#FEF7EE]">
        {categorySlug}
      </h1>
      <div className="lg:w-[1200px] items-center justify-center mt-10 lg:items-center lg:justify-between lg:flex lg:flex-wrap  grid gap-4 lg:gap-4">
        {coffee.map((product: any) => (
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
