import Box from "@mui/material/Box";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { purSalefields } from "../../helper/formFields";
import MyButton from "../Commons/MyButton";
import MyTextField from "../Commons/MyTextField";
import SelectControl from "../Commons/SelectControl";
import Loading from "../Commons/Loading";
import { useGetBrandsQuery, useGetFirmsQuery, useGetProductsQuery, usePostPurchaseMutation, useUpdatePurchaseMutation } from "../../services/stocks";
export default function PurchaseForm({ handleClose, initialState }) {
  const navigate = useNavigate();
  const [info, setInfo] = useState(initialState);
  const { data: firms,isLoading:loadingFirms } = useGetFirmsQuery();
  const { data: products,isLoading:loadingProducts } = useGetProductsQuery();
  const { data: brands,isLoading } = useGetBrandsQuery();
  const [updatePurchase] = useUpdatePurchaseMutation();
  const [postPurchase] = usePostPurchaseMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (info._id) {
      updatePurchase(info);
    } else {
      postPurchase(info);
    }

    handleClose();
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      component="form"
      onSubmit={handleSubmit}
    >
      <SelectControl
        label="Firm"
        items={firms}
        key="firms"
        name="firmId"
        value={info?.firmId?._id || info?.firmId || ''}
        onNavigate={() => navigate("/stock/firms/")}
        onChange={handleChange}
      />
      <SelectControl
        label="Brand"
        key="brands"
        items={brands}
        name="brandId"
        value={info?.brandId?._id || info?.brandId || ''}
        onNavigate={() => navigate("/stock/brands/")}
        onChange={handleChange}
      />

      <SelectControl
        label="Product"
        key="products"
        items={products}
        name="productId"
        value={info?.productId?._id || info?.productId || ''}
        onNavigate={() => navigate("/stock/products")}
        onChange={handleChange}
      />
      {purSalefields.map((item) => (
        <MyTextField
          key={item.id}
          {...item}
          onChange={handleChange}
          value={info[item.id]}
        />
      ))}
      <MyButton
        type="submit"
        variant="contained"
        size="large"
        title={info?._id ? "Update Purchase" : "Add New Purchase"}
      />
    </Box>
  );
}
