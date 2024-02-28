import { createSlice } from "@reduxjs/toolkit"
import {
  addProduct,
  deleteProductById,
  fetchAllProducts,
  fetchProductsByCategory,
  updateProduct,
} from "./fetchThunk"
import toast from "react-hot-toast"

interface ProductsState {
  products: []
  loading: boolean
  error: string | null
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Bir hata oluştu."
      })
      //--------------------------fetchAllProduct------------------------------------------------------
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Bir hata oluştu."
      })
      //--------------------------addProduct------------------------------------------------------
      .addCase(addProduct.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.loading = false
        toast.success("successfully added")
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Bir hata oluştu."
      })
      //--------------------------updateProduct------------------------------------------------------
      .addCase(updateProduct.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateProduct.fulfilled, (state) => {
        state.loading = false
        toast.success("successfully updated")
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Bir hata oluştu."
      })
      //--------------------------deleteProduct------------------------------------------------------
      .addCase(deleteProductById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteProductById.fulfilled, (state) => {
        state.loading = false
        toast.success("deleted")
      })
      .addCase(deleteProductById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Bir hata oluştu."
      })
  },
})

export default productsSlice.reducer
