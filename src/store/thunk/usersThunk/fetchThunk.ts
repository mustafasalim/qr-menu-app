import { createAsyncThunk } from "@reduxjs/toolkit"
import {
  deleteUsers,
  login,
  register,
  updateUsers,
  userInfo,
  users,
} from "../../../services/authServices"

export const authRegister = createAsyncThunk(
  "users/authRegister",
  async (payload: any) => {
    const response = await register(payload)
    return response.data
  }
)

export const authLogin = createAsyncThunk(
  "users/authLogin",
  async (payload: any) => {
    const response = await login(payload)
    return response.data
  }
)

export const authUserInfo = createAsyncThunk(
  "users/authUserInfo",
  async (payload: any) => {
    const response = await userInfo(payload)
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
