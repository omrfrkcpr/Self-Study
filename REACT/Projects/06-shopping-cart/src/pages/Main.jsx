import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
const navigate=useNavigate()
  return (
    <main className="main">
      <div>
        <h1>Welcome to Shopping Cart Application</h1>
        <div className="main-buttons">
          <button
            className="btn btn-outline-primary px-4"
            onClick={() => navigate("/new-product")}
          >
            Add New Product
          </button>
          <button
            className="btn btn-primary px-4 ms-3"
            onClick={() => navigate("/products")}
          >
            See Products
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
