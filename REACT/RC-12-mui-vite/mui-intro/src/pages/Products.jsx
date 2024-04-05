import Container from "@mui/material/Container";
import CssBaseLine from "@mui/material/CssBaseLine";
import Grid from "@mui/material/Grid";
import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
const Products = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <CssBaseLine /> {/** css reset işlemi */}
        <Grid container spacing={2} mt={5}>
          {[0, 123, 5, 6, 3, 3].map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
