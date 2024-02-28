import { createAsyncThunk } from "@reduxjs/toolkit"
import {
  deleteUsers,
  register,
  updateUsers,
  users,
} from "../../../services/authServices"

export const authRegister = createAsyncThunk(
  "users/authRegister",
  async (payload: any) => {
    const response = await register(payload)
    return response.data
  }
)

export const fetchGetAllUsers = createAsyncThunk(
  "users/fetchGetAllUsers",
  async () => {
    const response = await users()
    return response.data
  }
)

export const fetchDeleteUsers = createAsyncThunk(
  "users/fetchDeleteUsers",
  async (payload: any) => {
    const response = await deleteUsers(payload)
    return response.data
  }
)

export const fetchUpdateUser = createAsyncThunk(
  "products/updateProduct",
  async ({ userId, data }: any) => {
    const response = await updateUsers(userId, data)
    return response.data
  }
)
