import { Typography } from "@mui/material";
import React from "react";

const PageHeader = ({ text }) => {
  return (
    <Typography
      align="center"
      variant="h4"
      component={"h1"}
      color={"secondary.second"}
    >
      {text}
    </Typography>
  );
};

export default PageHeader;
