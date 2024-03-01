import React from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ img, name, statistics }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={img} />
      </Card>
    </div>
  );
};

export default PlayerCard;
