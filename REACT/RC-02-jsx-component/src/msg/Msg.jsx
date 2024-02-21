//? React uses JSX.
//? In JSX we can use HTML elements directly in JS

//! Components can return a combined HTML, CSS, JS code.
//!However, it must return a single container element (such as div, section, article, <> etc.).
//* Styling in JSX can be accomplished in various ways.
//* 1-) Inline-Styling can be used.
//* 2-) Styling can be defined as a local or global variable.
//* 3-) Styling can be defined as external stylesheet

//! NOTES:
//*For styling, the property-value(object) structure is used.
//* CamelCase font is used for property name, className is used for class definitions.
//*Material UI, Styled Component, Sass, Bootstrap etc. 3rd party libraries such as can also be used for styling.

import React from "react";
import "./Msg.css"; //External css . harici css dosyaları direk import edilir herhangi bir isim vermeye gerek yok

// import Local images
import img2 from "../img/dunya-haritasi-min.jpg";
import Clock from "../clock/Clock"; // nimm mich mit

const Msg = () => {
  //! JavaScript field

  // internal css
  const styleA = {
    color: "green",
    fontfamily: "Tahoma",
  };
  const styleImg = {
    width: "500px",
    border: "2px solid blue",
  };

  //! Below return => React (jsx) field
  return (
    <div>
      <h2 style={styleA}>This is MSG.jsx file</h2>
      {/* inline css */}
      <p style={{ color: "red", fontSize: "30px" }}>Welcome to REACT</p>
      <Clock />
      {/* direct browser src */}
      <img
        className="img"
        src="https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_1280.jpg"
        alt="cat"
      />
      {/* from local img folder with import*/}
      <img className="img" style={styleImg} src={img2} alt="img2" />
      <Clock />
      {/* from public folder relative-path src */}
      <img
        className="img"
        src="./assets/PngItem_415236.png"
        alt="animated-cat"
      />
    </div>
  );
};

export default Msg;
