import { useState } from "react";
import { FaGooglePlus, FaReact } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";

// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.

const MouseKeyboard = () => {
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const [eventName, setEventName] = useState("");

  const mouseEvent = (e) => {
    setXAxis(e.pageX);
    setYAxis(e.pageY);
  };

  const keyboardEvent = (e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57)
      alert("Well done! You entered a number");
    else alert("Sorry! please enter a number");
  };

  return (
    <div
      className=" text-center mt-4 d-flex flex-column align-items-center"
      onMouseOver={mouseEvent}
    >
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <p>X ve Y</p>
      <p className="text-danger fw-bold">
        {xAxis} - {yAxis}
      </p>
      <div
        className="bg-success text-light w-50 p-4"
        id="coord"
        // onMouseOver={mouseEvent}
      >
        <HiOutlineDesktopComputer /> COORDINATES <FaReact /> <FaGooglePlus />
      </div>
      <div>
        <h2 className="text-danger mt-4">
          Keyboard-Clipboard Events<br></br>
          <span className="text-primary">{eventName}</span>
        </h2>

        <input
          type="text"
          className="form-control"
          onChange={(e) => setEventName(e.target.value)}
          onKeyDown={keyboardEvent}
          // onKeyDown={(e) =>
          //   e.keyCode >= 48 && e.keyCode <= 57
          //     ? alert("Well done! You entered a number")
          //     : alert("Sorry! please enter a number")
          // }
        />
      </div>
      {/* <div id="todo-1" className="bg-primary text-light w-50 p-4 mt-4">
        todo item 1
      </div> */}
    </div>
  );
};

export default MouseKeyboard;
