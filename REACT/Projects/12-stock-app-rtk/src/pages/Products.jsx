import Container from "@mui/material/Container";
import React, { useState } from "react";
import MyButton from "../components/Commons/MyButton";
import PageHeader from "../components/Commons/PageHeader";
import StockModal from "../components/Commons/StockModal";
import ProductForm from "../components/Forms/ProductForm";
import ProductTable from "../components/Tables/ProductTable";

const Products = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Products" />
      <MyButton variant="contained" onClick={handleOpen} title="New Product" />
      {open && (
        <StockModal open={open} handleClose={handleClose}>
          <ProductForm handleClose={handleClose} />
        </StockModal>
      )}
      <ProductTable />
    </Container>
  );
};

export default Products;
