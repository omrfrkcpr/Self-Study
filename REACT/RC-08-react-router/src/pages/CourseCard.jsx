import React from "react";
import data from "../data.js";
import { Container, Col, Card, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CourseCard = () => {
  const navigate = useNavigate();
  return (
    <Container style={{ marginBottom: "5rem" }}>
      <Row className="justify-content-center g-4 mt-2">
        {data.map(({ img, name, text, id }) => {
          return (
            <Col
              // native bootstrap responsivity
              className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"
              key={id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button
                    onClick={() => navigate(`/courses/${name}`)}
                    variant="success"
                  >
                    DETAILS
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;
