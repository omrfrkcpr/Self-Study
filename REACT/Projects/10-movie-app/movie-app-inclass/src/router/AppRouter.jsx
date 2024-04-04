import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import Navbar from "../components/Navbar";
import Reset from "../pages/Reset";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<MovieDetail />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </>
  );
};

export default AppRouter;
