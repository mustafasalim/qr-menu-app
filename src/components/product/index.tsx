import { useState } from "react"
import Raiting from "../raitings"
import Tag from "../tag"

function Product() {
  const [sold, setSold] = useState<boolean>(false)
  return (
    <div
      className={`flex ${
        sold === false && "opacity-50"
      } flex-col p-2 shadow-md rounded-md w-[300px] overflow-hidden`}
    >
      <div>
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
            <Tag
              variant="soldout"
              title="sold out"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
