import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <AppRouter />
      {/* <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher/:teacherId" element={<TeacherDetails />} />
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/courses/:namee" element={<CardDetails />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router> */}
    </div>
  );
};

export default App;
