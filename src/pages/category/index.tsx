import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Product from "../../components/container/product"

const CategoryPage = () => {
  let { categorySlug } = useParams()

  useEffect(() => {
    console.log(categorySlug + "icin istege cıkıldı")
  }, [categorySlug])

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[1200px] flex flex-col">
        <h1 className="text-[35px] text-[#FEF7EE]">{categorySlug}</h1>
        <Product
          popular={false}
          stock={false}
        />
      </div>
    </div>
  )
}

export default CategoryPage
