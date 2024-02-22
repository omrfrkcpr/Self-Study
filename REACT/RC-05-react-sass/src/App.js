import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import data from "./data";

const App = () => {
  //? it should return only one div. But inside it it can be lots of divs !
  return (
    <div>
      <Header />
      <Card dataChild={data} />
    </div>
  );
};

export default App;

//* Initial function
// rfce // expression
// rafce // arrow
