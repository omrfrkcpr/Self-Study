import "./App.css";

//Bootstrap path => we can also import it into index.js
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import dataParent from "./data";
import CourseCard from "./components/CourseCard";

const App = () => {
  console.log(dataParent);

  //? it should return only one div. But inside it it can be lots of divs !
  return (
    <div>
      <CourseCard dataChild={dataParent} />
    </div>
  );
};

export default App;

//* Initial function
// rfce // expression
// rafce // arrow
