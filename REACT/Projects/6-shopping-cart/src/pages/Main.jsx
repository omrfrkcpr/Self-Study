import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <main className="main">
      <div>
        <h1>Welcome to Shopping Cart Application</h1>
        <div className="main-buttons">
          <button
            onClick={() => navigate("/new-product")}
            className="btn btn-outline-primary px-4"
          >
            Add New Product
          </button>
          <button
            onClick={() => navigate("/product-list")}
            className="btn btn-primary px-4 ms-3"
          >
            See Products
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
