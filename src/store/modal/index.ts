import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

// Define a type for the slice state
interface modalState {
  modals: any
}

// Define the initial state using that type
const initialState: modalState = {
  modals: [],
}

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    _append: (state: any, action: PayloadAction<any>) => {
      state.modals = [...state.modals, action.payload]
    },
    _destroy: () => {},
    _destroyAll: (state) => {
      state.modals = []
    },
  },
})

export const { _append, _destroy, _destroyAll } = modal.actions

// Other code such as selectors can use the imported `RootState` type

export default modal.reducer
