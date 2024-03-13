import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import MyNavbar from "./components/MyNavbar";
import Teacher from "./pages/Teacher";
import CourseCard from "./pages/CourseCard";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* 
      
      <Teacher />
      <CourseCard />
       */}
    </div>
  );
};

export default App;
