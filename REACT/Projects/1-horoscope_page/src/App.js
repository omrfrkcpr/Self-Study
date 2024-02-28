import "./App.scss";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import { Main } from "./components/main/Main";

const App = () => {
  //? it should return only one div. But inside it it can be lots of divs !
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};

export default App;

//* Initial function
// rfce // expression
// rafce // arrow
