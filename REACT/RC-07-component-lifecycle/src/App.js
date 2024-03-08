import "./App.css";
import React from "react";
// import LifeCycleMethods from "./components/LifeCycleMethods";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from "./components/Clock";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="container text-center mt-4">
      <button onClick={() => setShow(!show)} className="btn btn-danger mb-4">
        SHOW
      </button>
      {/* {show && <LifeCycleMethods />} */}

      {show && <Clock />}
    </div>
  );
};

export default App;

//* Initial function
// rfce // expression
// rafce // arrow
