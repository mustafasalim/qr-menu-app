import axios, { AxiosResponse } from "axios"

const baseUrl = axios.create({
  baseURL: "https://api.github.com",
})

interface apiParamsOptions {
  method: string
  url: string
  data?: any
}

export const api = async (
  param: apiParamsOptions
): Promise<AxiosResponse<any>> => {
  const { method, url, data } = param

  try {
    const response = await baseUrl({
      method: method,
      url: url,
      data: data,
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
    return Promise.reject(error)
  }
)
