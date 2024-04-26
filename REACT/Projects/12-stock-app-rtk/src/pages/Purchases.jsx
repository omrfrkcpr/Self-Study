import Container from "@mui/material/Container";
import React, { useState } from "react";
import MyButton from "../components/Commons/MyButton";
import PageHeader from "../components/Commons/PageHeader";
import StockModal from "../components/Commons/StockModal";
import PurchaseForm from "../components/Forms/PurchaseForm";
import PurchaseTable from "../components/Tables/PurchaseTable";

const Purchases = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      brandId: "",
      firmId: "",
      productId: "",
      quantity: "",
      price: "",
    });
  };
  const [initialState, setInitialState] = useState({
    brandId: "",
    firmId: "",
    productId: "",
    quantity: "",
    price: "",
  });

  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Purchases" />
      <MyButton variant="contained" onClick={handleOpen} title="New Purchase" />
      {open && (
        <StockModal open={open} handleClose={handleClose}>
          <PurchaseForm handleClose={handleClose} initialState={initialState} />
        </StockModal>
      )}
      <PurchaseTable
        setInitialState={setInitialState}
        handleOpen={handleOpen}
      />
    </Container>
  );
};

export default Purchases;
