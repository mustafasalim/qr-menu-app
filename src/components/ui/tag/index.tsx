import classNames from "classnames"

interface tagOptions {
  title: string | number

  variant?: string
}

function Tag({ title, variant = "default", ...props }: tagOptions) {
  return (
    <div
      className={classNames(`flex rounded-md  tex font-bold text-[17px]`, {
        "bg-[color:var(--background-secondary)] px-2 text-[color:var(--color-secondary)]":
          variant === "default",
        "bg-yellow-500 px-2 text-[color:var(--color-secondary)]":
          variant === "popular",
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
