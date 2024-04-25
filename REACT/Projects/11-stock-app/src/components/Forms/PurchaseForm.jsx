import Box from "@mui/material/Box";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { purSalefields } from "../../helper/formFields";
import useStockCall from "../../hooks/useStockCall";
import MyButton from "../Commons/MyButton";
import MyTextField from "../Commons/MyTextField";
import SelectControl from "../Commons/SelectControl";

export default function PurchaseForm({ handleClose, initialState }) {
  const navigate = useNavigate();
  const [info, setInfo] = useState(initialState);
  const { postStockData, putStockData } = useStockCall();
  const { products, brands, firms } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (info._id) {
      putStockData("purchases", info);
    } else {
      postStockData("purchases", info);
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
        name="firmId"
        value={info?.firmId?._id || info?.firmId || ""}
        onNavigate={() => navigate("/stock/firms/")}
        onChange={handleChange}
      />
      <SelectControl
        label="Brand"
        items={brands}
        name="brandId"
        value={info?.brandId?._id || info?.brandId || ""}
        onNavigate={() => navigate("/stock/brands/")}
        onChange={handleChange}
      />

      <SelectControl
        label="Product"
        items={products}
        name="productId"
        value={info?.productId?._id || info?.productId || ""}
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
