import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { fetchAllProducts } from "../../store/thunk/productsThunk/fetchThunk"
import Product from "../../components/ui/product"
import Loading from "../../components/ui/loading"
import ErrorBoundary from "../../errorBoundry"

function Home() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])
  const coffeeData = useSelector(
    (state: RootState) => state.productsSlice.products
  )
  const loading = useSelector((state: RootState) => state.productsSlice.loading)
  const error = useSelector((state: RootState) => state.productsSlice.error)

  if (loading) {
    return (
      <div className="w-full lg:flex lg:flex-col items-center justify-center mt-32 mb-32">
        <h1 className="lg:w-[1200px] flex items-center justify-center lg:justify-start text-[35px] text-[color:var(--color-primary)]">
          Special Products
        </h1>
        <div className="lg:w-[1200px] items-center justify-center mt-10 lg:items-center lg:justify-center lg:flex lg:flex-wrap  grid gap-4 lg:gap-4">
          <Loading />
        </div>
      </div>
    )
  }
  if (error) {
    return (
      <div className="w-full lg:flex lg:flex-col items-center justify-center mt-32 mb-32">
        <h1 className="lg:w-[1200px] flex items-center justify-center lg:justify-start text-[35px] text-[color:var(--color-primary)]">
          Special Products
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
        Special Products
      </h1>
      <div className="lg:w-[1200px] items-center justify-center mt-10 lg:items-center lg:justify-between lg:flex lg:flex-wrap  grid gap-4 lg:gap-4">
        <ErrorBoundary>
          {coffeeData.map((product: any, key) => {
            if (product.popular === true) {
              return (
                <Product
                  key={key}
                  productImg={product.image}
                  productTitle={product.name}
                  productPrice={product.price}
                  popular={product.popular}
                  stock={product.stock}
                  rating={product.rating}
                />
              )
            }
          })}
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default Home
