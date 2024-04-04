import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import Navbar from "../components/Navbar";
import Reset from "../pages/Reset";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRouter />}>
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route>
        <Route path="/reset" element={<Reset />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
