import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

// Define a type for the slice state
interface ToggleState {
  value: boolean
}

// Define the initial state using that type
const initialState: ToggleState = {
  value: false,
}

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    _toggleSwitch: (state, action: PayloadAction<boolean>) => {
      state.value === action.payload
        ? (state.value = false)
        : (state.value = true)
    },
  },
})

export const { _toggleSwitch } = toggleSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selecttoggle = (state: RootState) => state.toggle.value

export default toggleSlice.reducer
