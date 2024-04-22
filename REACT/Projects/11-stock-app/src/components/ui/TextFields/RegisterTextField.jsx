import React from "react";
import TextField from "@mui/material/TextField";

const RegisterTextField = ({
  name,
  label,
  type,
  id,
  autoComplete,
  variant,
  value,
  onChange,
  onBlur,
  helperText,
  error,
}) => {
  return (
    <TextField
      name={name}
      label={label}
      type={type}
      id={id}
      inputProps={{
        autoComplete: autoComplete || "off",
      }}
      variant={variant || "outlined"}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      helperText={helperText}
      error={error}
    />
  );
};

export default RegisterTextField;
