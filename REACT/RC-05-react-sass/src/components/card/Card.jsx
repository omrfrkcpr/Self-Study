import "./Card.scss";
import React from "react";

const Card = ({ dataChild }) => {
  return (
    <div className="container">
      {dataChild.map(({ name, job, comment, img, id }) => {
        return (
          <div key={id} className="card">
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="" />
            <div className="btn-div">
              <button className="btn-div--small">Small</button>
              <button className="btn-div--large">Large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
