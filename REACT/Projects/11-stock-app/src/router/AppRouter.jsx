import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import LoginMid from "../pages/LoginMid";
// import RegisterMid from "../pages/RegisterMid";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* middlewareli fonksiyonların olduğu sayfalar */}
        {/* <Route path="/" element={<LoginMid />} />
        <Route path="register" element={<RegisterMid />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />        
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
