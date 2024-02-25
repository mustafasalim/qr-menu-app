import { RootState, store } from "../store"
import { _append, _destroy, _destroyAll } from "./index"
import { useSelector } from "react-redux"

export const useModals = () =>
  useSelector((state: RootState) => state.modal.modals)
export const createModal = (name: any, data: any = false) =>
  store.dispatch(
    _append({
      name,
      data,
    })
  )
export const destroyModal = () => store.dispatch(_destroy())
export const destroyAllModal = () => store.dispatch(_destroyAll())
