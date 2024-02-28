import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Events from "./1-events_hooks/Events";
// import Hooks from "./2-hooks/Hooks";
// import Counter from "./3-classComponents/Counter";
// import Form from "./4-form/Form";
// import FormObject from "./4-form/FormObject";
import MouseKeyboard from "./5-mouse-keyboard/MouseKeyboard";

const App = () => {
  //? it should return only one div. But inside it it can be lots of divs !
  return (
    <div>
      {/* <Events /> */}
      {/* <Hooks /> */}
      {/* <Counter /> */}
      {/* <Counter count={20} /> */}
      {/* <Form /> */}
      {/* <FormObject /> */}
      <MouseKeyboard />
    </div>
  );
};

export default App;

//* Initial function
// rfce // expression
// rafce // arrow
