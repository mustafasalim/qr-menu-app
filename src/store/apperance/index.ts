import { createSlice } from "@reduxjs/toolkit"

const initialState: any = {
  backgroundColor: {
    name: "dark",
    primary: "#111315",
    secondary: "#FEF7EE",
    third: "#1B1D1F",
  },
  color: {
    primary: "#FEF7EE",
    secondary: "#111315",
  },
}

const apperanceSlice = createSlice({
  name: "apperance",
  initialState,
  reducers: {
    _backgroundColor: (state, action) => {
      state.backgroundColor = action.payload
    },
    _color: (state, action) => {
      state.color = action.payload
    },
  },
})

export const { _backgroundColor, _color } = apperanceSlice.actions

export default apperanceSlice.reducer
