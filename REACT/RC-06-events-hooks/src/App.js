import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Events from "./1-events_hooks/Events";
import Hooks from "./2-hooks/Hooks";
import Counter from "./3-classComponents/Counter";

const App = () => {
  //? it should return only one div. But inside it it can be lots of divs !
  return (
    <div>
      <Events />
      <Hooks />
      <Counter />
      <Counter count={20} />
    </div>
  );
};

export default App;

//* Initial function
// rfce // expression
// rafce // arrow
