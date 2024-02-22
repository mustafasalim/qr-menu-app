import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material"
import React from "react"

function ProductHeader() {
  const [age, setAge] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  console.log(age)

  return (
    <div className="w-full p-4 flex items-center justify-start">
      <div className="flex gap-x-4 w-full">
        <div>
          <TextField
            label="Search"
            id="outlined-size-small"
            size="small"
          />
        </div>

        <FormControl
          sx={{ minWidth: 120 }}
          size="small"
        >
          <InputLabel id="demo-select-small-label">All</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Filter"
            onChange={handleChange}
          >
            <MenuItem value="afwaf">Ten</MenuItem>
            <MenuItem value="awfwaw">Twenty</MenuItem>
            <MenuItem value="fawfwafw">Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default ProductHeader
