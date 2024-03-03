import { useModals } from "../../../../store/modal/hook"
import allModal from "../../../../../modals"
import ModalHeader from "./modalHeader"
import { motion } from "framer-motion"

function Modal() {
  const modals = useModals()

  return (
    <>
      <div className="fixed inset-0 bg-black/10 shadow-2xl z-30 flex items-center justify-center transition-all">
        {modals.map((modal: any) => {
          const m = allModal.find((mod) => mod.name === modal.name)

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <section className="lg:w-[600px] w-[350px] bg-white rounded-lg overflow-hidden">
                <ModalHeader title={m?.name} />
                <div className="p-4">{m?.element}</div>
              </section>
            </motion.div>
          )
        })}
      </div>
    </>
  )
}

export default Modal
