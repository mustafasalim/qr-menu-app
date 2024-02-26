import { _destroyAll } from "../../../../../store/modal"
import { useModals } from "../../../../../store/modal/hook"
import RegisterForm from "../../formik/register-form"

function RegisterAddOrUpdateModal({ mode }: any) {
  const modalData = useModals()
  const userData = modalData.map((d: any) => {
    return d.data
  })
  return (
    <section className=" p-4 border rounded-lg">
      {mode === "REGISTER" && <RegisterForm />}
      {mode === "EDIT" && <RegisterForm data={userData[0]} />}
    </section>
  )
}

export default RegisterAddOrUpdateModal
