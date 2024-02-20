import Raiting from "../../ui/voteTracker"
import Tag from "../../ui/tag"
import classNames from "classnames"

interface ProductProps {
  popular?: boolean
  stock?: boolean
  rating?: any
  productImg: any
  productTitle: string
  productPrice: string
}

function Product(props: ProductProps) {
  const { popular, stock, productImg, productTitle, productPrice, rating } =
    props
  return (
    <div
      className={classNames(
        `flex flex-col border p-2 shadow-md rounded-md w-[300px] overflow-hidden`,
        {
          "!border-red-500 !opacity-45": stock === false,
          "border-yellow-500 opacity-100": popular === true,
        }
      )}
    >
      <div>
        {popular && popular === true ? (
          <div className="absolute p-1">
            <Tag
              variant="popular"
              title="Popular"
            />
          </div>
        ) : (
          ""
        )}

        <img
          className="rounded-md w-full"
          src={productImg}
          alt=""
        />
      </div>
      <div className="grid gap-y-2 py-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[20px] text-[#FEF7EE]">{productTitle}</h1>
          </div>
          <div>
            <Tag title={productPrice} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Raiting rating={rating} />
          </div>
          <div>
            {stock === false ? (
              <Tag
                variant="soldout"
                title="sold out"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
