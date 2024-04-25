import Box from "@mui/material/Box";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn } from "../../styles/globalStyle";
import MyButton from "../Commons/MyButton";
import MyTextField from "../Commons/MyTextField";
import { firmFields } from "../../helper/formFields";

export default function FirmForm({ open, handleClose, initialState }) {
  const [info, setInfo] = React.useState(initialState);
  const { postStockData, putStockData } = useStockCall();

  const handleChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.name);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", info);

    if (info._id) {
      //* id varsa edit işlemi
      putStockData("firms", info);
    } else {
      //* id yoksa create işlemi
      postStockData("firms", info);
    }
    handleClose();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      // sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      sx={flexColumn}
    >
      {firmFields.map((item) => (
        <MyTextField key={item.id} onChange={handleChange} value={info[item.id]} {...item} />
      ))}
      <MyButton
        type="submit"
        variant="contained"
        title={info._id ? "Update Firm" : "Submit Firm"}
      />
    </Box>
  );
}
