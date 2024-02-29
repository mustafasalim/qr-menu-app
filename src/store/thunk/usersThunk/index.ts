import { createSlice } from "@reduxjs/toolkit"
import {
  authLogin,
  authRegister,
  authUserInfo,
  fetchDeleteUsers,
  fetchGetAllUsers,
  fetchUpdateUser,
} from "./fetchThunk"
import toast from "react-hot-toast"

interface usersOptions {
  users: []
  loading: boolean
  error: string | null
}

const initialState: usersOptions = {
  users: [],
  loading: false,
  error: "",
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // -----------------------------register---------------------------
      .addCase(authLogin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(authLogin.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Bir hata oluştu."
      })
      // -----------------------------login---------------------------
      .addCase(authRegister.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(authRegister.fulfilled, (state) => {
        state.loading = false
        toast.success("user addedd")
      })
      .addCase(authRegister.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Bir hata oluştu."
        toast.error("kullanıcı var")
      })
      // -----------------------------userİnfo---------------------------
      .addCase(authUserInfo.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(authUserInfo.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(authUserInfo.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Bir hata oluştu."
        toast.error("kullanıcı var")
      })
      // -----------------------------getAllUsers---------------------------
      .addCase(fetchGetAllUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchGetAllUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(fetchGetAllUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Bir hata oluştu."
      })
      // -----------------------------deleteUsers---------------------------
      .addCase(fetchDeleteUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDeleteUsers.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(fetchDeleteUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Bir hata oluştu."
      })
      // -----------------------------updateUsers---------------------------
      .addCase(fetchUpdateUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUpdateUser.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(fetchUpdateUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Bir hata oluştu."
      })
  },
})

export default usersSlice.reducer
