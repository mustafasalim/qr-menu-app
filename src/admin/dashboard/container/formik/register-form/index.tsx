import { useFormik } from "formik"
import { Button, TextField } from "@mui/material"
import { _destroyAll } from "../../../../../store/modal"
import { destroyAllModal } from "../../../../../store/modal/hook"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../../../store/store"
import {
  authRegister,
  fetchGetAllUsers,
  fetchUpdateUser,
} from "../../../../../store/thunk/usersThunk/fetchThunk"
import * as yup from "yup"

interface formikConfig {
  username: string
  email: string
  password: string
}
function RegisterForm({ data }: any) {
  const dispatch = useDispatch<AppDispatch>()
  const validationShema = yup.object({
    username: yup.string().required().max(20).min(3),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  const formik = useFormik<formikConfig>({
    initialValues: {
      username: data ? data.username : "",
      email: data ? data.email : "",
      password: data ? data.password : "",
    },
    validationSchema: validationShema,
    onSubmit: async (values) => {
      if (data) {
        await dispatch(
          fetchUpdateUser({ userId: data._id, data: values })
        ).then(() => dispatch(fetchGetAllUsers()))
      } else {
        await dispatch(authRegister(values)).then(() => {
          dispatch(fetchGetAllUsers())
        })
      }

      //itege çıkılacak
      destroyAllModal()
    },
  })
  return (
    <form
      className="grid gap-y-4"
      onSubmit={formik.handleSubmit}
    >
      <label className="grid">
        <h1>User-Name</h1>
        <TextField
          placeholder="username"
          size="small"
          type="text"
          name="username"
          id="username"
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          value={formik.values.username}
          onChange={formik.handleChange}
        />
      </label>
      <hr />
      <label className="grid">
        <h1>E-mail</h1>
        <TextField
          placeholder="email"
          size="small"
          type="email"
          name="email"
          id="email"
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </label>
      <hr />
      <label className="grid">
        <h1>Password</h1>
        <TextField
          size="small"
          placeholder="password"
          type="text"
          name="password"
          id="password"
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </label>
      <hr />
      <div className="flex">
        <Button
          variant="contained"
          type="submit"
        >
          Kaydet
        </Button>
      </div>
    </form>
  )
}

export default RegisterForm
