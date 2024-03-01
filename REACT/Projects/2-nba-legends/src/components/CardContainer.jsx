import React from "react";
import { data } from "../helpers/data";
import { Col, Form, Row } from "react-bootstrap";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <div>
      <Form.Control type="search" placeholder="Search a player..." />
      <Row>
        {data.map((player, index) => {
          return (
            <Col>
              <PlayerCard {...player} key={index} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CardContainer;
