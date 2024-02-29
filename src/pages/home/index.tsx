import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { fetchAllProducts } from "../../store/thunk/productsThunk/fetchThunk"
import Product from "../../components/ui/product"
import Loading from "../../components/ui/loading"

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
    return <Loading />
  }
  if (error) {
    return <div>error page</div>
  }
  return (
    <div className="w-full lg:flex lg:flex-col items-center justify-center ">
      <h1 className="lg:w-[1200px] flex items-center justify-center lg:justify-start text-[35px] text-[#FEF7EE]">
        all produts
      </h1>
      <div className="lg:w-[1200px] items-center justify-center mt-10 lg:items-center lg:justify-between lg:flex lg:flex-wrap  grid gap-4 lg:gap-4">
        {coffeeData.map((product: any) => (
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

export default Home
