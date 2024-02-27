import { api } from "../../config/api"

export const getProducts = async (category: any) => {
  return await api({
    method: "get",
    url: `/fakeproduct${category}`,
  })
}

export const getAllProducts = async () => {
  return await api({
    method: "get",
    url: "/fakeAllProduct",
  })
}

export const getUpdateProducts = async (productId: any) => {
  return api({
    method: "post",
    url: `/fakepost${productId}`,
  })
}
