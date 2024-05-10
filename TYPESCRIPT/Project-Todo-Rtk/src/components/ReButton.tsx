import React from "react";
import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material";//! mui den button componentinin alabileceği propertylerin typeını aldık

interface IReButton extends ButtonProps { //! Mui ButtonPropstan extend aldık ve üzerine ekleme yaptık
  text: string;
}
const ReButton:React.FC<IReButton> = ({ text, ...props }) => {
  return (
    <Button variant="contained" {...props}>
      {text}
    </Button>
  );
};

export default ReButton;
