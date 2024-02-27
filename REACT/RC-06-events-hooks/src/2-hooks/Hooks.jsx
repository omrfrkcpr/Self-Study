import React, { useState } from "react";
import Events from "../1-events_hooks/Events";

//* ================== HOOKS ========================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimini cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanimlanmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =================================================

const Hooks = () => {
  //& usestate hook u her zaman en uste yazilmali
  //************ */
  const [counter, setCounter] = useState(0);
  // let counter = 0

  //? Object 1.Method */
  const [person, setPerson] = useState({
    name: "Saban",
    job: "developer",
    age: 50,
    color: "red",
  });
  //? Object 2.Method */
  const [toggle, setToggle] = useState(true);

  //************ */
  const increaseCount = () => {
    // counter++;
    setCounter(counter + 1); // counter=1
  };

  //? Object 1.Method */
  // const handleToggle = () => {
  //   if (person.name === "Saban") {
  //     setPerson({
  //       name: "Emre",
  //       job: "tester",
  //       age: 33,
  //       color: "blue",
  //     });
  //   } else {
  //     setPerson({
  //       name: "Saban",
  //       job: "developer",
  //       age: 50,
  //       color: "red",
  //     });
  //   }
  // };
  //? Object 2.Method */
  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      setPerson({
        name: "Saban",
        job: "developer",
        age: 50,
        color: "red",
      });
    } else {
      setPerson({
        name: "Emre",
        job: "tester",
        age: 33,
        color: "blue",
      });
    }
  };

  const changeName = () => {
    setPerson({
      // Spread Operator
      ...person,
      name: person.name === "Emre" ? "Omer" : person.name,
    });
  };

  return (
    <div className="container text-center p-3">
      <h2>***************************</h2>
      <h2>***************************</h2>
      <h1>USE STATE</h1>
      <h2>Count: {counter}</h2>
      <button onClick={increaseCount} className="btn btn-primary m-1">
        Increase
      </button>
      <button
        onClick={() => counter > 0 && setCounter(counter - 1)}
        className="btn btn-primary m-1"
      >
        Decrease
      </button>
      <h2 className="mt-5">***************************</h2>
      <h2>***************************</h2>
      <div>
        <h1>UseState with Object</h1>
        <h2 className="text-danger">Name: {person.name}</h2>
        <h2 className="text-primary">Job: {person.job}</h2>
        <h2 className="text-success">Age: {person.age}</h2>
        <button
          onClick={handleToggle}
          style={{ backgroundColor: person.color, color: "white" }}
          className="btn m-4 p-2"
        >
          Toggle Person
        </button>
        <button
          onClick={changeName}
          style={{ backgroundColor: "green", color: "white" }}
          className="btn m-4 p-2"
        >
          Change Emre's Name
        </button>
        <button
          onClick={() =>
            setPerson({
              ...person,
              age: person.name === "Saban" ? 51 : person.age,
            })
          }
          style={{ backgroundColor: "yellow", color: "black" }}
          className="btn m-4 p-2"
        >
          Change Saban's Age
        </button>
      </div>
      {/* Toggle true ise Events componentini goster aksi takdirde gosterme */}
      {toggle && <Events />}
    </div>
  );
};

export default Hooks;
