import React, { useState } from "react";
import { data } from "../helpers/data";
import { Col, Container, Form, Row } from "react-bootstrap";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  //! Be Careful! data is not changable, but dataFilter is changable
  // const dataFilter = data.filter((a) => a.name.includes(search));

  return (
    <>
      <Form.Control
        type="search"
        placeholder="Search a player..."
        className="mb-4 w-75 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-4">
        <Row className="g-4">
          {data
            .filter((a) => a.name.toLowerCase().includes(search.toLowerCase()))
            .map((player, index) => {
              return (
                <Col md={6} lg={6} xl={4} xxl={3} className="text-center">
                  <PlayerCard {...player} key={index} />
                </Col>
              );
            })}
          {/* {dataFilter.map((player, index) => {
            return (
              <Col md={6} lg={6} xl={4} xxl={3} className="text-center">
                <PlayerCard {...player} key={index} />
              </Col>
            );
          })} */}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
