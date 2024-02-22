import "./App.css";

//Bootstrap path => we can also import it into index.js
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import dataParent from "./data";
import CourseCard from "./components/CourseCard";
import MyNavBar from "./components/MyNavBar";

const App = () => {
  console.log(dataParent);

  //? it should return only one div. But inside it it can be lots of divs !
  return (
    <div>
      <MyNavBar />
      <CourseCard dataChild={dataParent} />
    </div>
  );
};

export default App;

//* Initial function
// rfce // expression
// rafce // arrow
