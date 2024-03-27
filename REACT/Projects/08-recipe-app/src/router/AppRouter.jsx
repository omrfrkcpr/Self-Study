import React from "react";
import Navbar from "../components/navbar/Navbar";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import PrivateRouter from "./PrivateRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Footer from "../components/footer/Footer";
import Details from "../pages/details/Details";
import NotFound from "../pages/errorPage/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>

        {/* <Route path="/home" element={<Home/>} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
