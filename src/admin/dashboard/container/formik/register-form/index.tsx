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

interface formikConfig {
  username: string
  email: string
  password: string
}
function RegisterForm({ data }: any) {
  const dispatch = useDispatch<AppDispatch>()
  const { handleSubmit, values, handleChange } = useFormik<formikConfig>({
    initialValues: {
      username: data ? data.username : "",
      email: data ? data.email : "",
      password: data ? data.password : "",
    },
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
      onSubmit={handleSubmit}
    >
      <label className="grid">
        <h1>User-Name</h1>
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
      <hr />
      <label className="grid">
        <h1>E-mail</h1>
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
      <hr />
      <label className="grid">
        <h1>Password</h1>
        <TextField
          size="small"
          placeholder="password"
          type="text"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
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
