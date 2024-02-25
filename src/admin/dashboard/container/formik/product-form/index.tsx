import { Button, MenuItem, Select, Switch, TextField } from "@mui/material"
import { useFormik } from "formik"
import { destroyAllModal } from "../../../../../store/modal/hook"
import toast from "react-hot-toast"

interface ProductFormOptions {
  name: string
  image: any
  price: number
  rating: number
  popular: boolean
  stock: boolean
}

function ProductForm() {
  const formik = useFormik<ProductFormOptions>({
    initialValues: {
      name: "",
      image: "",
      price: 0,
      rating: 0,
      popular: false,
      stock: false,
    },
    onSubmit: (values) => {
      console.log(values)
      destroyAllModal()
      toast.success("Product added")
    },
  })

  return (
    <form
      className="grid gap-4"
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
      <label className="grid gap-2">
        <h1>Rating</h1>
        <Select
          name="rating"
          id="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
        >
          <MenuItem value={4.5}>{4.5}</MenuItem>
          <MenuItem value={3.9}>{3.9}</MenuItem>
          <MenuItem value={4.0}>{4.0}</MenuItem>
          <MenuItem value={4.9}>{4.9}</MenuItem>
        </Select>
      </label>
      <hr />
      <label className="flex gap-x-4">
        <div className="flex items-center">
          <h1>Popular</h1>
          <Switch
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
