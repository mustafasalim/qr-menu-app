import { configureStore } from "@reduxjs/toolkit"
import toggle from "./toggle-on-offf"
import modal from "./modal"

export const store = configureStore({
  reducer: {
    toggle,
    modal,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
