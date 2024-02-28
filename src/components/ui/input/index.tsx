import classNames from "classnames"

interface inputOptions {
  type?: string
  size?: string
  placeholder?: string
  label?: string
  name?: any
  id?: any
  value?: any
  onChange?: any
}

function Input({
  type,
  size,
  placeholder,
  label,
  name,
  id,
  value,
  onChange,
}: inputOptions) {
  return (
    <label className="flex items-center justify-center gap-x-2">
      {label}
      <input
        onChange={onChange}
        value={value}
        name={name}
        id={id}
        className={classNames(
          "text-[16px] border rounded-md transition-all focus:border-blue-500 outline-none",
          {
            "w-[200px] p-2": size === "medium",
            "w-[400px] p-4": size === "large",
          }
        )}
        type={type}
        placeholder={placeholder}
      />
    </label>
  )
}

export default Input
