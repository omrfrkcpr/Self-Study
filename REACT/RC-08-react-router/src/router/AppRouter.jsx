import React from "react";
import Home from "../pages/Home";
import MyNavbar from "../components/MyNavbar";
import Teacher from "../pages/Teacher";
import CourseCard from "../pages/CourseCard";
import CardDetails from "../pages/CardDetails";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "../pages/ContactForm";
import Login from "../pages/Login";
import TeacherDetails from "../pages/TeacherDetails";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          {/* "/" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu
         "/" ile başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir .
         "/courses/:name" böyle bir yolda yani  :name belirtilen kısım bir değişkendir, mesela name=HTML gibi. bunun için : kullanılır
         
          */}
          <Route exact path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher/:teacherId" element={<TeacherDetails />} />
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/courses/:namee" element={<CardDetails />} />

          {/* It redirects to Private Router for pages that can be accessed with password control.*/}
          <Route path="/contact" element={<PrivateRouter />}>
            <Route path="" element={<ContactForm />} />
          </Route>

          {/* <Route path="/contact" element={<ContactForm />} /> */}
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default AppRouter;
