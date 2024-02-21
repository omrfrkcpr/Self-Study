import "./App.css";
import React from "react"; // only in this file necessary
import Msg from "./msg/Msg";
import Footer from "./footer/Footer";

const App = () => {
  //? it should return only one div. But inside it it can be lots of divs !
  return (
    <div>
      <Msg />
      <Footer />
    </div>
  );
};

export default App;

//* Initial function
// rfce // expression
// rafce // arrow
