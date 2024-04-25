import Box from "@mui/material/Box";
import * as React from "react";
import { useSelector } from "react-redux";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn } from "../../styles/globalStyle";
import MyButton from "../Commons/MyButton";
import MyTextField from "../Commons/MyTextField";
import SelectControl from "../Commons/SelectControl";
import { productFields } from "../../helper/formFields";


export default function ProductForm({ handleClose }) {
  const [info, setInfo] = React.useState({
    categoryId: "",
    brandId: "",
    name: "",
  });
  const { postStockData } = useStockCall();
  const { categories, brands } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("products", info);
    handleClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>
      <SelectControl
        label="Category"
        name="categoryId"
        value={info.categoryId}
        items={categories}
        onChange={handleChange}
      />
      <SelectControl
        label="Brand"
        name="brandId"
        value={info.brandId}
        items={brands}
        onChange={handleChange}
      />
      {productFields.map((item) => (
        <MyTextField key={item.id} onChange={handleChange} value={info[item.id]} {...item} />
      ))}
      <MyButton type="submit" variant="contained" title={"Submit Product"} />
    </Box>
  );
}
