import { api } from "../../config/api"

export const login = async (payload: any) => {
  return await api({
    method: "post",
    url: "/login",
    data: payload,
  })
}
export const register = async (payload: any) => {
  return await api({
    method: "post",
    url: "/register",
    data: payload,
  })
}

export const users = async () => {
  return await api({
    method: "get",
    url: "/users",
  })
}

export const deleteUsers = async (payload: any) => {
  return await api({
    method: "post",
    url: `/deleteUsers`,
    data: payload,
  })
}

export const updateUsers = async (userId: any, data: any) => {
  return await api({
    method: "put",
    url: `/users/${userId}`,
    data: data,
  })
}
