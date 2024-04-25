import { Button } from "@mui/material";
import React from "react";

const MyButton = (props) => {
  return <Button {...props}>{props.title}</Button>;
};

export default MyButton;
