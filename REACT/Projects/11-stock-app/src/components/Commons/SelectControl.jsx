import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

const SelectControl = ({ label, items, name, value, onNavigate, onChange }) => (
  <FormControl>
    <InputLabel variant="outlined" id={`${name}-select-label`}>
      {label}
    </InputLabel>
    <Select
      labelId={`${name}-select-label`}
      label={label}
      id={`${name}-select`}
      name={name}
      value={value}
      onChange={onChange}
      required
    >
      {onNavigate && [
        <MenuItem onClick={onNavigate}>{`Add New ${label}`}</MenuItem>,
        <Divider />,//* bazen bu tarz koşula bağlı renderlarda fragment ı hazır yapılar kabul etmeyebilir. İşte o zaman array kullanarak engeli aşabiliriz.
      ]}
      {items.map((item) => (
        <MenuItem key={item._id} value={item._id}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectControl;
