import React from "react";
import ProductCard from "../components/ProductCard";


const ProductList = () => {
  

 

 

  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
       (
          <>
            <article id="product-panel" className="col-md-6">
              {[].map((product) => (
                <ProductCard key={product.id} />
              ))}
            </article>
           
          </>
        )
      </div>
    </div>
  );
};

export default ProductList;
