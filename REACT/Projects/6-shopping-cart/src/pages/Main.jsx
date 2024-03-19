import React from "react";

const Main = () => {

  return (
    <main className="main">
      <div>
        <h1>Welcome to Shopping Cart Application</h1>
        <div className="main-buttons">
          <button
            className="btn btn-outline-primary px-4"
          
          >
            Add New Product
          </button>
          <button
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
