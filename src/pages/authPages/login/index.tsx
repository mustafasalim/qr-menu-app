import { Link, useNavigate } from "react-router-dom"
import LoginForm from "../../../components/container/formik/loginForm"
import { useEffect } from "react"
import { Toaster } from "react-hot-toast"

function Login() {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  if (token) {
    useEffect(() => {
      navigate("/admin")
    }, [token])
  } else {
    return (
      <section className="flex items-center justify-center w-full h-screen bg-[#F6F4F4]">
        <div className="p-20 bg-white shadow-md rounded-lg flex flex-col ">
          <LoginForm />
          <Link
            className="text-[14px] mt-3 text-blue-500 underline"
            to="/"
          >
            back to homepage
          </Link>
        </div>
        <Toaster />
      </section>
    )
  }
}

export default Login
