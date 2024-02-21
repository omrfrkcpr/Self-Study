import "./App.css";
import React from "react";
import Person from "./Person";

const App = () => {
  //? it should return only one div. But inside it it can be lots of divs !
  return (
    <div>
      <Person
        // normally get fetched from database and allow Person.jsx to use
        name="Ayse Kazan"
        img="https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg"
        tel="555 55 55"
      />
      <Person
        name="Osman Yilmaz"
        img="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg"
        tel="555 55 77"
      />
    </div>
  );
};

export default App;

//* Initial function
// rfce // expression
// rafce // arrow
