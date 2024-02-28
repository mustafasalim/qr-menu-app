import { api } from "../../config/api"

export const userUpdate = async (userId: any, data: any) => {
  return api({
    method: "post",
    url: `/userUpdate${userId}`,
    data: data,
  })
}

export const userDelete = async (userId: any) => {
  return api({
    method: "post",
    url: `/user${[...userId]}`,
  })
}
