import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";

  const getData = async () => {
    try {
      const response = await axios.get(BASE_URL);
      // console.log(response)
      setProducts(response.data);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <article id="product-panel" className="col-md-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  getData={getData}
                />
              ))}
            </article>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
