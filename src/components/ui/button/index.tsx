import classNames from "classnames"

interface buttonOptions {
  text: string
  variant?: string
  type: string
}

function Button({ text, variant, ...props }: buttonOptions) {
  return (
    <button
      className={classNames(
        "p-2 px-4 rounded-md bg-slate-200 hover:opacity-45 transition-all",
        {
          "bg-blue-500 text-white": variant === "primary",
          "bg-red-500 text-white": variant === "danger",
          "bg-yellow-500 text-white": variant === "warning",
        }
      )}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button
