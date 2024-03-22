import React from "react";
import data from "../data.js";
import ImageSSS from "./styles/ImageSSS";
import CardSSS from "./styles/CardSSS.jsx";

const Card = () => {
  return (
    <div>
      {data.map(({ id, title, body, image }) => (
        <CardSSS key={id} nida={id % 2 === 1 && "row-reverse"}>
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <ImageSSS src={`./images/${image}`} alt="" />
        </CardSSS>
      ))}
    </div>
  );
};

export default Card;
