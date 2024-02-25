import { _destroyAll } from "../../../../../store/modal"
import RegisterForm from "../../formik/register-form"

function RegisterModal() {
  return (
    <section className="flex items-center justify-center">
      <RegisterForm />
    </section>
  )
}

export default RegisterModal
