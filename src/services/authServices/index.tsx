import { api } from "../../config/api"

export const login = async (payload: any) => {
  return api({
    method: "post",
    url: "/login",
    data: payload,
  })
}
export const register = async (payload: any) => {
  return api({
    method: "post",
    url: "/register",
    data: payload,
  })
}
