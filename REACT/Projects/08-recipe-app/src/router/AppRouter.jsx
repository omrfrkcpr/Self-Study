import React from "react";
// import Navbar from "../components/navbar/Navbar";
import Login from "../pages/login/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
      {/* <Navbar /> */}
    </Router>
  );
};

export default AppRouter;
