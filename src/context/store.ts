import { configureStore } from "@reduxjs/toolkit"
import toggle from "./toggleOnOff"
import modal from "./Modal"

export const store = configureStore({
  reducer: {
    toggle,
    modal,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
