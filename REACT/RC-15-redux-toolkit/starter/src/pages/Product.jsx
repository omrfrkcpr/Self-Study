import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { Container } from '@mui/material';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => setProducts(res.products));
    }, []);
  return (
    <div>
      <Container>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          color="text.primary"
          mt={3}>
          Products
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          mt={5}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Product