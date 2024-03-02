import classNames from "classnames"

interface buttonOptions {
  text: string
  variant?: string
  type?: any
  onClick?: () => void
}

function Button({ text, variant, type, onClick }: buttonOptions) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(
        "p-2 px-4 rounded-md hover:opacity-45 transition-all",
        {
          "bg-blue-500 text-white": variant === "primary",
          "bg-red-500 text-white": variant === "danger",
          "bg-yellow-500 text-white": variant === "warning",
        }
      )}
    >
      {text}
    </button>
  )
}

export default Button
