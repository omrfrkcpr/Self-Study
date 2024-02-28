import "./App.css";
import React, { useState } from "react";
import { BiSolidHandUp } from "react-icons/bi";
import { BiSolidHandDown } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
// import { red } from "@mui/material/colors";

const App = () => {
  const [carRotation, setCarRotation] = useState(0);
  const [carPosition, setCarPosition] = useState({ x: 0, y: 0 });
  const [backgroundColor, setBackgroundColor] = useState("#a9a9a9");

  //************************************** */
  const handleUpClick = () => {
    setCarRotation(180); // Yukarı hareket ettiğinde araba saat yönünde 180 derece döner
    setBackgroundColor("#00ffff"); //Arkaplanı yeşil yapar
  };
  //***************************************** */
  const handleDownClick = () => {
    setCarRotation(0);
    setBackgroundColor("#8a2be2");
  };
  //****************************************** */
  const handleKeyDown = (event) => {
    const moveDistance = 200; // Her bir tuşa basıldığında arabanın ilerleyeceği mesafe
    if (event.key === "ArrowLeft") {
      // Sol tuşa basıldığında araba 200px sola hareket eder

      setCarPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x - moveDistance,
      }));
      setBackgroundColor("#00ff12");
    } else if (event.key === "ArrowRight") {
      // Sağ tuşa basıldığında araba 200px sağa hareket eder
      setCarPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x + moveDistance,
      }));
      setBackgroundColor("#00ff12");
    }
  };

  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex="0">
      <div className="top-icon" onClick={handleUpClick}>
        <BiSolidHandUp style={{ fontSize: "64px" }} />
      </div>

      <div className="car-container">
        <div
          className="car"
          style={{
            transform: `translate(${carPosition.x}px, ${carPosition.y}px) rotate(${carRotation}deg)`,
            backgroundColor: backgroundColor,
            border: "1px solid red",
          }}
        >
          <FaCar style={{ fontSize: "64px" }} />
        </div>
      </div>

      <div className="bottom-icon" onClick={handleDownClick}>
        <BiSolidHandDown style={{ fontSize: "64px" }} />
      </div>
    </div>
  );
};

export default App;
//* Initial function
// rfce // expression
// rafce // arrow
