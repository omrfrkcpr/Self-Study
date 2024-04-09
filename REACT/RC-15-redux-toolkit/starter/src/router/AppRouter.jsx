import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Product from "../pages/Product";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Product />} />
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
