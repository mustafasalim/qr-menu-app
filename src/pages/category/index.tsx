import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Product from "../../components/ui/product"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import {
  fetchAllProducts,
  fetchProductsByCategory,
} from "../../store/thunk/productsThunk/fetchThunk"
import Loading from "../../components/ui/loading"
import ErrorBoundary from "../../errorBoundry"

const CategoryPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  let { categorySlug } = useParams()

  useEffect(() => {
    dispatch(fetchProductsByCategory(categorySlug)).then(() =>
      fetchAllProducts()
    )
  }, [categorySlug])

  const coffee = useSelector((state: RootState) => state.productsSlice.products)
  const loading = useSelector((state: RootState) => state.productsSlice.loading)

  if (loading) {
    return (
      <div className="w-full lg:flex lg:flex-col items-center justify-center mt-32 mb-32">
        <h1 className="lg:w-[1200px] flex items-center justify-center lg:justify-start text-[35px] text-[color:var(--color-primary)]">
          {categorySlug}
        </h1>
        <div className="lg:w-[1200px] items-center justify-center mt-10 lg:items-center lg:justify-center lg:flex lg:flex-wrap  grid gap-4 lg:gap-4">
          <Loading />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full lg:flex lg:flex-col items-center justify-center mt-32 mb-32">
      <h1 className="lg:w-[1200px] flex items-center justify-center lg:justify-start text-[35px] text-[color:var(--color-primary)]">
        {categorySlug}
      </h1>
      <div className="lg:w-[1200px] items-center justify-center mt-10 lg:items-center lg:justify-between lg:flex lg:flex-wrap  grid gap-4 lg:gap-4">
        <ErrorBoundary>
          {coffee.map((product: any, key) => (
            <Product
              key={key}
              productImg={product.image}
              productTitle={product.name}
              productPrice={product.price}
              popular={product.popular}
              stock={product.stock}
              rating={product.rating}
            />
          ))}
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default CategoryPage
