import Container from "@mui/material/Container";
import React, { useState } from "react";
import MyButton from "../components/Commons/MyButton";
import PageHeader from "../components/Commons/PageHeader";
import StockModal from "../components/Commons/StockModal";
import SaleForm from "../components/Forms/SaleForm";
import SaleTable from "../components/Tables/SaleTable";

const Sales = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      brandId: "",
      productId: "",
      quantity: "",
      price: "",
    });
  };
  const [initialState, setInitialState] = useState({
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  });

  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Sales" />
      <MyButton variant="contained" onClick={handleOpen} title="New Sale" />
      {open && (
        <StockModal open={open} handleClose={handleClose}>
          <SaleForm handleClose={handleClose} initialState={initialState} />
        </StockModal>
      )}
      <SaleTable setInitialState={setInitialState} handleOpen={handleOpen} />
    </Container>
  );
};

export default Sales;
