import classNames from "classnames"

interface SearchProp {
  variant: string
  icon: any
  backgroundColor: string
  textColor: string
}

function Search({ variant, icon, backgroundColor, textColor }: SearchProp) {
  return (
    <div className="flex">
      <div className={`flex h-full p-2  items-center bg-[${backgroundColor}]`}>
        {icon}
      </div>
      <input
        className={classNames(
          `outline-none bg-[${backgroundColor}] text-[${textColor}]`,
          {
            "p-1 px-2": variant === "normal",
            "p-2 px-4": variant === "medium",
            "p-3 px-6": variant === "large",
          }
        )}
        type="text"
      />
    </div>
  )
}

export default Search
