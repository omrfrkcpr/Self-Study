import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
import BrandCard from "../components/Cards/BrandCard";
import MyButton from "../components/Commons/MyButton";
import PageHeader from "../components/Commons/PageHeader";
import BrandForm from "../components/Forms/BrandForm";
import { useGetBrandsQuery } from "../services/stocks";
import StockModal from "../components/Commons/StockModal";

const Brands = () => {
  const { data: brands, isLoading } = useGetBrandsQuery();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      name: "",
      image: "",
    });
  };
  const [initialState, setInitialState] = useState({
    name: "",
    image: "",
  });
  console.log("brands:", brands);
  console.log("brands:", initialState);

  return (
    <Container maxWidth={"xl"}>
      {/* <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Brands
      </Typography> */}
      {/* <Button variant="contained" onClick={handleOpen}>
        New Brand
      </Button> */}
      <PageHeader text="Brands" />
      <MyButton variant="contained" onClick={handleOpen} title="New Brand" />
      <Grid container spacing={2} mt={3}>
        {/* stock ta oluşturduğumuz loading stateini bu şekilde kullanabiliriz. */}
        {isLoading ? (
          <img src={loadingGif} alt="loading..." height={500} />
        ) : (
          brands.map((brand) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={brand._id}>
              <BrandCard
                {...brand}
                handleOpen={handleOpen}
                setInitialState={setInitialState}
              />
            </Grid>
          ))
        )}
      </Grid>
      {open && (
        <StockModal open={open} handleClose={handleClose}>
          <BrandForm handleClose={handleClose} initialState={initialState} />
        </StockModal>
      )}
    </Container>
  );
};

export default Brands;
