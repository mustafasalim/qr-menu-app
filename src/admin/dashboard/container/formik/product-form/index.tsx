import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material"
import { useFormik } from "formik"
import { destroyAllModal } from "../../../../../store/modal/hook"
import {
  addProduct,
  fetchAllProducts,
  updateProduct,
} from "../../../../../store/thunk/productsThunk/fetchThunk"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../../../store/store"

interface ProductFormOptions {
  name: string
  image: any
  price: number
  rating: number
  popular: boolean
  stock: boolean
}

function ProductForm({ data }: any) {
  const dispatch = useDispatch<AppDispatch>()
  const formik = useFormik<ProductFormOptions>({
    initialValues: {
      name: data ? data.name : "",
      image: data ? data.image : "",
      price: data ? data.price : 0,
      rating: data ? data.rating : 0,
      popular: data ? data.popular : false,
      stock: data ? data.stock : false,
    },
    onSubmit: async (values) => {
      if (data) {
        await dispatch(
          updateProduct({ productId: data._id, data: values })
        ).then(() => {
          dispatch(fetchAllProducts())
        })
      } else {
        dispatch(addProduct(values)).then(() => {
          dispatch(fetchAllProducts())
        })
      }
      console.log(values)
      destroyAllModal()
    },
  })

  return (
    <form
      className="grid gap-4 "
      onSubmit={formik.handleSubmit}
    >
      <label className="grid gap-2">
        <h1>Product-Name</h1>
        <TextField
          placeholder="americano,latte"
          type="text"
          name="name"
          value={formik.values.name}
          size="small"
          onChange={formik.handleChange}
        />
      </label>
      <hr />
      <label className="grid gap-2">
        <h1>İmage-Link</h1>
        <TextField
          name="image"
          placeholder="https://image.png"
          type="text"
          size="small"
          value={formik.values.image}
          onChange={formik.handleChange}
        />
      </label>
      <hr />
      <label className="grid gap-2">
        <h1>Price</h1>
        <TextField
          name="price"
          placeholder="10"
          type="number"
          size="small"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
      </label>
      <hr />
      <label className="flex items-center gap-2">
        <h1>Rating</h1>

        <FormControl
          sx={{ minWidth: 120 }}
          size="small"
        >
          <Select
            placeholder="fwaw"
            name="rating"
            defaultValue={formik.values.rating}
            value={formik.values.rating}
            onChange={formik.handleChange}
          >
            <MenuItem value={4.5}>{4.5}</MenuItem>
            <MenuItem value={3.9}>{3.9}</MenuItem>
            <MenuItem value={4.0}>{4.0}</MenuItem>
            <MenuItem value={4.9}>{4.9}</MenuItem>
          </Select>
        </FormControl>
      </label>
      <hr />
      <label className="flex gap-x-4">
        <div className="flex items-center">
          <h1>Popular</h1>
          <Switch
            checked={formik.values.popular === true}
            color="warning"
            name="popular"
            id="popular"
            value={formik.values.popular}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex items-center">
          <h1>Stock</h1>
          <Switch
            checked={formik.values.stock === true}
            name="stock"
            id="stock"
            value={formik.values.stock}
            onChange={formik.handleChange}
          />
        </div>
      </label>
      <label>
        <Button
          variant="contained"
          type="submit"
        >
          Add
        </Button>
      </label>
    </form>
  )
}

export default ProductForm
