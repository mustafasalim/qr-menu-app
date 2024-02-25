import Raiting from "../voteTracker"
import Tag from "../tag"
import classNames from "classnames"

interface ProductProps {
  popular?: boolean
  stock?: boolean
  rating?: any
  productImg: any
  productTitle: string
  productPrice: number
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
      <div className="bg-cover overflow-hidden">
        {popular && popular === true ? (
          <div className="absolute">
            <img
              width={80}
              src="../images/best.png"
              alt=""
            />
          </div>
        ) : (
          ""
        )}

        <img
          className="rounded-md w-full max-w-[300px] max-h-[173px] object-cover "
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
            <Tag title={"$" + productPrice} />
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
