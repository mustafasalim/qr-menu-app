import { useFormik } from "formik"
import { Button, TextField } from "@mui/material"
import { _destroyAll } from "../../../../../store/modal"
import { destroyAllModal } from "../../../../../store/modal/hook"
import { toast } from "react-hot-toast"

interface formikConfig {
  username: string
  email: string
  password: string
}
function RegisterForm() {
  const { handleSubmit, values, handleChange } = useFormik<formikConfig>({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values)
      //itege çıkılacak
      toast.success("User Added")
      destroyAllModal()
    },
  })
  return (
    <form
      className="grid gap-y-4"
      onSubmit={handleSubmit}
    >
      <label className="grid">
        <TextField
          placeholder="username"
          size="small"
          type="text"
          name="username"
          id="username"
          value={values.username}
          onChange={handleChange}
        />
      </label>

      <label className="grid">
        <TextField
          placeholder="email"
          size="small"
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label className="grid">
        <TextField
          size="small"
          placeholder="password"
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <hr />

      <div className="flex">
        <Button
          className="!bg-[#212B36] !rounded-lg !font-bold !text-white"
          type="submit"
        >
          Kaydet
        </Button>
      </div>
    </form>
  )
}

export default RegisterForm
