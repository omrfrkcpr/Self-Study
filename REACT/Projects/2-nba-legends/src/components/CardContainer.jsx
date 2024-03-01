import React from "react";
import { data } from "../helpers/data";
import { Col, Container, Form, Row } from "react-bootstrap";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <div>
      <Form.Control
        type="search"
        placeholder="Search a player..."
        className="mb-4"
      />
      <Container className="card-container rounded-4">
        <Row className="g-4">
          {data.map((player, index) => {
            return (
              <Col md={6} lg={6} xl={4} xxl={3} className="text-center">
                <PlayerCard {...player} key={index} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;
