import { useFormik } from "formik"
import Input from "../../../ui/input"
import Button from "../../../ui/button"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../../store/store"
import { authLogin } from "../../../../store/thunk/usersThunk/fetchThunk"
import { useNavigate } from "react-router-dom"

function LoginForm() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values: any) => {
      dispatch(authLogin(values))
        .then((res) => {
          if (res.payload.token) {
            localStorage.setItem("token", res.payload.token)
            navigate("/admin")
          }
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    },
  })
  return (
    <>
      <h1 className="text-[20px] mb-5">Login</h1>
      <form
        className="grid gap-4"
        onSubmit={formik.handleSubmit}
      >
        <Input
          onChange={formik.handleChange}
          name="email"
          type="email"
          size="medium"
          placeholder="email"
        />
        <Input
          onChange={formik.handleChange}
          name="password"
          type="password"
          size="medium"
          placeholder="password"
        />
        <div>
          <Button
            type={onsubmit}
            text="Login"
            variant="primary"
          />
        </div>
      </form>
    </>
  )
}

export default LoginForm
