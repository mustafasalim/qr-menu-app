import Button from "../../../components/ui/button"
import Input from "../../../components/ui/input"
import { useFormik } from "formik"

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values: any) => {
      console.log(values)
    },
  })
  return (
    <section className="flex items-center justify-center w-full h-screen bg-[#F6F4F4]">
      <div className="p-20 bg-white shadow-md rounded-lg flex flex-col ">
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
      </div>
    </section>
  )
}

export default Login
