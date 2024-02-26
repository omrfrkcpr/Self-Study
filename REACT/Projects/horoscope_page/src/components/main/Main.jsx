import React from "react";
import "./Main.scss";
import { data } from "../../helper/data";
import Card from "./Card";

export const Main = () => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
};

// eger obje yollaniyorsa, spread operator kullanilabilir
