import Box from "@mui/material/Box";
import * as React from "react";
import { productFields } from "../../helper/formFields";
import { flexColumn } from "../../styles/globalStyle";
import MyButton from "../Commons/MyButton";
import MyTextField from "../Commons/MyTextField";
import SelectControl from "../Commons/SelectControl";
import { useGetBrandsQuery, useGetCategoriesQuery, usePostProductMutation } from "../../services/stocks";

export default function ProductForm({ handleClose }) {
  const [info, setInfo] = React.useState({
    categoryId: "",
    brandId: "",
    name: "",
  });
  const { data: brands } = useGetBrandsQuery();
  const { data: categories } = useGetCategoriesQuery();
  const [postProduct] = usePostProductMutation();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();
    postProduct(info);
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
        <MyTextField
          key={item.id}
          onChange={handleChange}
          value={info[item.id]}
          {...item}
        />
      ))}
      <MyButton type="submit" variant="contained" title={"Submit Product"} />
    </Box>
  );
}
