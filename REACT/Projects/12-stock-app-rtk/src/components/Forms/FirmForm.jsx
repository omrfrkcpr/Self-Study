import Box from "@mui/material/Box";
import * as React from "react";
import { firmFields } from "../../helper/formFields";
import { flexColumn } from "../../styles/globalStyle";
import MyButton from "../Commons/MyButton";
import MyTextField from "../Commons/MyTextField";
import { usePostFirmMutation, useUpdateFirmMutation } from "../../services/stocks";
export default function FirmForm({ open, handleClose, initialState }) {
  const [info, setInfo] = React.useState(initialState);
  const [postFirm] = usePostFirmMutation();
  const [updateFirm] = useUpdateFirmMutation();

  const handleChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.name);
    setInfo({ ...info, [e.target.name]: e.target.value }); //! inputların name attributelarındaki isimler ile info statetimin içindeki keyler aynı olduğu için bu şekilde tek bir fonksiyonla inputdaki verilerimi state e aktarabildim.
  };
  console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", info);

    if (info._id) {
      //* id varsa edit işlemi
      updateFirm(info); //! update işleminde info dolu geldiği için içerisinde id bilgiside yer alıyor. Biz bu id üzerinden sorgulama yaparak id varsa yapacağın işlem put işlemi id yoksa yapacağın işlem post işlemi diye belirtmiş olduk.
    } else {
      //* id yoksa create işlemi
      postFirm(info);
    }
    handleClose(); //? submit işleminden sonra modalın kapanması için burada handleClose fonksiyonunu çağırıyoruz.
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      // sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      sx={flexColumn}
    >
      {firmFields.map((item) => (
        <MyTextField
          key={item.id}
          onChange={handleChange}
          value={info[item.id]}
          {...item}
        />
      ))}
      <MyButton
        type="submit"
        variant="contained"
        title={info._id ? "Update Firm" : "Submit Firm"}
      />
    </Box>
  );
}
