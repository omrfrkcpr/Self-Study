import React, { useState } from "react";
import axios from "axios";

const NewProduct = () => {
  const initialFormData = {
    name: "",
    price: 0,
    amount: 0,
    image: "",
    dampingRate: 0.8,
  };
  const [formData, setFormData] = useState(initialFormData);

  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";

  const { name, price, amount, image, dampingRate } = formData;

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`${BASE_URL}`, formData);

    setFormData(initialFormData);
  };

  return (
    <div className="container">
      <article
        id="add-product"
        className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center"> New Product</h1>

        <form onSubmit={handlePostSubmit} className="p-2">
          <div className="mb-3">
            <label htmlFor="add-name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="add-price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={price}
              required
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="add-quantity" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              className="form-control"
              name="amount"
              value={amount}
              required
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />
          </div>
          <label htmlFor="add-image" className="form-label">
            Product Image
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              https://example.com/
            </span>
            <input
              type="url"
              className="form-control"
              name="image"
              value={image}
              aria-describedby="basic-addon3"
              required
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="add-to-cart btn btn-success btn-sm"
            >
              <i className="fa-solid fa-cart-plus me-2"></i>Save To Product
            </button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default NewProduct;
