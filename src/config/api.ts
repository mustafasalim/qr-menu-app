import axios, { AxiosResponse } from "axios"
import toast from "react-hot-toast"

const baseUrl = axios.create({
  baseURL: "http://localhost:3000/api",
})

interface apiParamsOptions {
  method: string
  url: string
  data?: any
  header?: any
}

export const api = async (
  param: apiParamsOptions
): Promise<AxiosResponse<any>> => {
  const { method, url, data, header } = param

  try {
    const response = await baseUrl({
      method: method,
      url: url,
      data: data,
      headers: header,
    })
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

baseUrl.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    toast.error(error.response.data.message)

    return Promise.reject(error)
  }
)
