import { createAsyncThunk } from "@reduxjs/toolkit"
import {
  getAllProducts,
  addProducts,
  updateProducts,
  deleteProduct,
  getCategory,
} from "../../../services/productServices"

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category: any) => {
    const response = await getCategory(category)
    return response.data
  }
)

// Tüm ürünleri getiren thunk
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await getAllProducts()
    return response.data
  }
)

// Ürün ekleyen thunk
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (data: any) => {
    const response = await addProducts(data)
    return response.data
  }
)

// Ürün güncelleyen thunk
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ productId, data }: any) => {
    const response = await updateProducts(productId, data)
    return response.data
  }
)

// Ürünü silen thunk
export const deleteProductById = createAsyncThunk(
  "products/deleteProductById",
  async (productId: any) => {
    const response = await deleteProduct(productId)
    return response.data
  }
)
