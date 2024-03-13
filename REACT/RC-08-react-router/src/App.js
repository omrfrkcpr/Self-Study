import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import MyNavbar from "./components/MyNavbar";
import Teacher from "./pages/Teacher";
import CourseCard from "./pages/CourseCard";
import CardDetails from "./pages/CardDetails";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./pages/ContactForm";
import Login from "./pages/Login";
import TeacherDetails from "./pages/TeacherDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher/:teacherId" element={<TeacherDetails />} />
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/courses/:namee" element={<CardDetails />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
