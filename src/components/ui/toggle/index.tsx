import classNames from "classnames"

interface toggleOptions {
  variant?: string
  label?: string
  onChange?: () => void
}

function Toggle(props: toggleOptions) {
  const { variant, onChange, label } = props

  return (
    <label
      onChange={onChange}
      className="inline-flex items-center cursor-pointer "
    >
      <input
        type="checkbox"
        className="sr-only peer"
      />
      <div
        className={classNames(
          `relative  after:bg-cover after:bg-center after:bg-[url('https://t4.ftcdn.net/jpg/05/40/49/35/360_F_540493592_NXamBERmgRt7ugpQbkmKMITMTZHeIdfz.jpg')] bg-gray-200 w-14 h-7   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`,
          {
            "peer-checked:bg-red-600": variant === "red",
            "peer-checked:bg-yellow-600": variant === "warning",
          }
        )}
      ></div>
      <div className="text-[color:var(--color-primary)] font-semibold pl-2">
        {label}
      </div>
    </label>
  )
}

export default Toggle
