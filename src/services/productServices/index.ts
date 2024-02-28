import { api } from "../../config/api"

export const getProducts = async (category: any) => {
  return await api({
    method: "get",
    url: `/fakeproduct${category}`,
  })
}

export const getAllProducts = () => {
  return api({
    method: "get",
    url: "/products",
  })
}

export const addProducts = async (data: any) => {
  return await api({
    method: "post",
    url: "/products",
    data: data,
  })
}

export const updateProducts = async (productId: any, data: any) => {
  return await api({
    method: "put",
    url: `/products/${productId}`,
    data: data,
  })
}

export const deleteProduct = async (productsId: any) => {
  return await api({
    method: "post",
    url: `/deleteProducts`,
    data: productsId,
  })
}
