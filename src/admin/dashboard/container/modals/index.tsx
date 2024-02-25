import { useModals } from "../../../../store/modal/hook"
import allModal from "../../../../../modals"
import ModalHeader from "./modalHeader"

function Modal() {
  const modals = useModals()

  return (
    <>
      <div className="fixed inset-0 bg-black/10 shadow-2xl z-10 flex items-center justify-center transition-all">
        {modals.map((modal: any) => {
          const m = allModal.find((mod) => mod.name === modal.name)

          return (
            <section className="w-[600px] bg-white rounded-lg overflow-hidden">
              <ModalHeader title={m?.name} />
              <div className="p-4">{m?.element}</div>
            </section>
          )
        })}
      </div>
    </>
  )
}

export default Modal
