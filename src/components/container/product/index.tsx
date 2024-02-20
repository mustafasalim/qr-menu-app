import Raiting from "../../ui/voteTracker"
import Tag from "../../ui/tag"
import classNames from "classnames"

interface ProductProps {
  popular: boolean
  stock: boolean
}

function Product(props: any) {
  const { popular, stock }: ProductProps = props
  return (
    <div
      className={classNames(
        `flex flex-col border p-2 shadow-md rounded-md w-[300px] overflow-hidden`,
        {
          "border-red-500 opacity-65": stock === false,
        }
      )}
    >
      <div>
        {popular && popular === true ? (
          <div className="absolute p-1">
            <Tag
              variant="popular"
              title="popular"
            />
          </div>
        ) : (
          ""
        )}
        <img
          className="rounded-md w-full"
          src="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg"
          alt=""
        />
      </div>
      <div className="grid gap-y-2 py-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[20px] text-[#FEF7EE]">Cappucuno</h1>
          </div>
          <div>
            <Tag title="$3.50" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Raiting vote="votesAvailable" />
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
