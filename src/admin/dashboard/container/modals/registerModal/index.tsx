import { _destroyAll } from "../../../../../store/modal"
import RegisterForm from "../../formik/register-form"

function RegisterModal() {
  return (
    <section className=" p-4 border rounded-lg">
      <RegisterForm />
    </section>
  )
}

export default RegisterModal
