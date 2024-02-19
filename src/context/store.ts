import { configureStore } from "@reduxjs/toolkit"
import toggle from "./toggleOnOff"

export const store = configureStore({
  reducer: {
    toggle,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
