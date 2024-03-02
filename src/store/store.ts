import { configureStore } from "@reduxjs/toolkit"
import modal from "./modal"
import productsSlice from "./thunk/productsThunk/"
import usersSlice from "./thunk/usersThunk"
import apperanceSlice from "./apperance"

export const store = configureStore({
  reducer: {
    apperanceSlice,
    usersSlice,
    productsSlice,
    modal,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
