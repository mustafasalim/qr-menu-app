import { useFormik } from "formik"
import { Button, TextField } from "@mui/material"
import { _destroyAll } from "../../../../../context/Modal"
import {
  destroyAllModal,
  destroyModal,
} from "../../../../../context/Modal/hook"

interface formikConfig {
  username: string
  email: string
  password: string
}

function RegisterModal() {
  const { handleSubmit, values, handleChange } = useFormik<formikConfig>({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values)
      destroyAllModal()
    },
  })
  return (
    <section className="flex items-center justify-center ">
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
    </section>
  )
}

export default RegisterModal
