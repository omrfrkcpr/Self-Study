export const brandFields = [
  {
    label: "Brand Name",
    name: "name",
    id: "name",
    type: "text",
    required: true,
  },
  {
    label: "Image Url",
    name: "image",
    id: "image",
    type: "url",
    required: false,
  },
];

export const firmFields = [
  { label: "Firm Name", name: "name", id: "name", type: "text" },
  { label: "Firm Address", name: "address", id: "address", type: "text" },
  { label: "Firm Phone", name: "phone", id: "phone", type: "text" },
  { label: "Firm Logo", name: "image", id: "image", type: "text" },
];

export const productFields = [
  { label: "Product Name", name: "name", id: "name", type: "text" },
];

export const purSalefields = [
    {
      label: "Quantity",
      id: "quantity",
      name: "quantity",
      type: "number",
      InputProps: { inputProps: { min: 0 } },
      required: true,
    },
    {
      label: "Price",
      id: "price",
      name: "price",
      type: "number",
      InputProps: { inputProps: { min: 0 } },
      required: true,
    },
  ];