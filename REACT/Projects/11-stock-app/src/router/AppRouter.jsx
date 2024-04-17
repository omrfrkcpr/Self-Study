import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../layouts/Home";
import Firms from "../layouts/Firms";
import Products from "../layouts/Products";
import Sales from "../layouts/Sales";
import Purchases from "../layouts/Purchases";
import Brands from "../layouts/Brands";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          {/* Nested routes in the stock route  */}
          <Route path="" element={<Dashboard />}>
            {/* We dont need to enter a path for Home component. It works according to its parent path. So - dashbord comp. */}
            <Route index element={<Home />} />
            {/* Absolute paths = For absolute paths, we need to add parent path to the child path, then the absolute path. */}
            <Route path="/stock/brands" element={<Brands />} />
            {/* Relative Paths */}
            <Route path="firms" element={<Firms />} />
            <Route path="products" element={<Products />} />
            <Route path="sales" element={<Sales />} />
            <Route path="purchases" element={<Purchases />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
