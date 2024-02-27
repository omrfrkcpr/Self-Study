import React from "react";

const Events = () => {
  let title = "Hello";
  let count = 0;

  const increase = () => {
    count++;
    console.log(count);
    document.querySelector("span").textContent = count;
  };

  const changeTitle = () => {};

  return (
    <div className="container text-center mt-4">
      <h1>Title: {title}</h1>
      <h2>
        COUNT: <span className="text-danger">{count}</span>
      </h2>
      <button onClick={increase} className="btn btn-primary m-1">
        Increase
      </button>
      <button className="btn btn-danger m-1">Change Title</button>
      <button className="btn btn-info m-1">Clicked!</button>
    </div>
  );
};

export default Events;
