import Box from "@mui/material/Box";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn } from "../../styles/globalStyle";
import MyButton from "../Commons/MyButton";
import MyTextField from "../Commons/MyTextField";
import { brandFields } from "../../helper/formFields";


export default function BrandForm({ open, handleClose, initialState }) {
  const [info, setInfo] = React.useState(initialState);
  const { postStockData, putStockData } = useStockCall();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      //* id varsa edit işlemi
      putStockData("brands", info);
    } else {
      //* id yoksa create işlemi
      postStockData("brands", info);
    }
    handleClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>
      {brandFields.map((item) => (
        <MyTextField
          onChange={handleChange}
          key={item.id}
          value={info[item.id]}
          {...item}
        />
      ))}
      <MyButton
        type="submit"
        variant="contained"
        size="large"
        title={info._id ? "Update Brand" : "Submit Brand"}
      />
    </Box>
  );
}
