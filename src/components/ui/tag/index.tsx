import classNames from "classnames"

interface tagOptions {
  title: string

  variant?: string
}

function Tag({ title, variant = "default", ...props }: tagOptions) {
  return (
    <div
      className={classNames(`flex rounded-md  tex font-bold text-[20px]`, {
        "bg-[#BEE3CC] px-2 text-[#1B1D1F]": variant === "default",
        "bg-yellow-500 px-2 text-[#1B1D1F]": variant === "popular",
        "bg-none text-red-500": variant === "soldout",
        "bg-green-500 px-2 text-[#e7e4e1]": variant === "new",
      })}
      {...props}
    >
      {title}
    </div>
  )
}

export default Tag
