import "./App.css";
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GetRandomUser from "./components/GetRandomUser";
// import UseEffectAxiosFect from "./components/UseEffectAxiosFect";
// import LifeCycleMethods from "./components/LifeCycleMethods";
// import Clock from "./components/Clock";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="container text-center mt-4">
      {/* <button onClick={() => setShow(!show)} className="btn btn-danger mb-4">
        SHOW
      </button> */}
      {/* {show && <LifeCycleMethods />} */}
      {/* {show && <Clock />} */}
      {/* <UseEffectAxiosFect /> */}
      <GetRandomUser />
    </div>
  );
};

export default App;

//* Initial function
// rfce // expression
// rafce // arrow
