import { createContext, useState } from "react";
import data from "./data";
import Home from "./components/Home";

//! 1- create context
export const StudentContext = createContext();

const App = () => {
  const [students, setStudents] = useState(data);

  const changeColor = (newColor, id) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, color: newColor } : student
      )
    );
  };
  return (
    //! 2- context provider
    <StudentContext.Provider value={{ students, changeColor }}>
      <Home />
    </StudentContext.Provider>
  );
};

export default App;
