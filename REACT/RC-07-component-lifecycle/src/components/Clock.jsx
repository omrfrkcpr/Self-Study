import React, { useEffect, useState } from "react";
import moment from "moment";

const Clock = () => {
  // //?===============================
  // //? USEEFFECT HOOK
  // //?===============================
  // //! The useEffect Hook allows you to perform side effects on function components.
  // //! We can think of useEffect Hook as componentDidMount, componentDidUpdate and componentWillUnmount..setInterval is used to fetch data with fetch axios and to say set (that is, do something I want) every time the array changes.

  //^ useEffect(() => {
  //* /* ComponentDidMount code */
  //^ }, []);

  //^ useEffect(() => {
  //* */ componentDidUpdate code */
  //^ }, [var1, var2]);

  //^ useEffect(() => {

  //^ return() => {
  //* //* componentWillUnmount code */
  //^ };
  //^ }, []);

  //^ useEffect(() => {
  //* //* componentDidMount code + componentDidUpdate code */

  //^ return() => {
  //* //* componentWillUnmount code */
  //^ };
  //^ }, [var1, var2]);

  const [time, setTime] = useState(moment());
  const [counter, setCounter] = useState(0);

  //& componentDidMount = render only one time at the beginning
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment());
      // console.log("hello");
    }, 1000);

    return () => {
      console.log("go to other page");
      clearInterval(timer);
    };
  }, []);

  //& componentDidUpdate = rebder after every updating of counter
  useEffect(() => {
    counter > 0 && alert("Counter increased!");
  }, [counter]);

  return (
    <div>
      <div className="text-danger fw-bold">
        {time.format("HH")}
        {time.format("mm") % 2 ? ":" : " "}
        {time.format("mm")}
        {time.format("ss") % 2 === 1 ? ":" : " "}
        {time.format("ss")}
      </div>
      <div>
        <h2>*****************************</h2>
        <h1>Counter: {counter}</h1>
        <button
          className="btn btn-warning"
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Clock;
