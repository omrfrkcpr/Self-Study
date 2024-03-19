import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import NewProduct from "../pages/NewProduct";
import ProductList from "../pages/ProductList";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
