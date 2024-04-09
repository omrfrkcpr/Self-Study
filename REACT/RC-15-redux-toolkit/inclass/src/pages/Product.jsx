import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import errorImage from "../assets/error.png";
import loadingImage from "../assets/loading.gif";
import ProductCard from "../components/ProductCard";
import { getProductsData } from "../features/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { productsData, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductsData());
  }, []);
  return (
    <div>
      <Container>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          color="text.primary"
          mt={3}
        >
          Products
        </Typography>

        {loading ? (
          <Box display="flex" alignItems="center" justifyContent="center">
            <img src={loadingImage} alt="Loading..." />
          </Box>
        ) : error ? (
          <Box display="flex" alignItems="center" justifyContent="center">
            <img src={errorImage} alt="Error..." />
          </Box>
        ) : (
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            mt={5}
          >
            {productsData.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </Grid>
        )}

        {/* {loading ? (
          <Box display="flex" alignItems="center" justifyContent="center">
            <img src={loadingImage} alt="Loading..." />
          </Box>
        ) : (
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            mt={5}
          >
            {productsData.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </Grid>
        )}

        {error && (
          <Box display="flex" alignItems="center" justifyContent="center">
            <img src={errorImage} alt="Error..." />
          </Box>
        )} */}
      </Container>
    </div>
  );
};

export default Product;
