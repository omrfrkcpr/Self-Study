// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
import { Row, Container, Col, Card, Button } from "react-bootstrap";

const CourseCard = ({ dataChild }) => {
  console.log({ dataChild });
  return (
    <Container>
      <Row className="justify-content-center g-4 mt-2">
        {/* //! In the react field, only map is supported as a loop, and only ternary is supported among conditions. */}
        {dataChild.map(({ img, name, text, id }) => {
          //* arrow (map) asks for a return when you use a fancy. You can not use a fancy in React, then there is no need for a return.
          //? While the data pulled from the database is printed to the screen, the outermost div requires a unique data, and we write it as key={id}. It doesn't have to be id, unique can be any property, for example img
          return (
            <Col
              // native bootstrap responsivity
              className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"
              // react-bootstrap responsivity
              // sm={12}
              // md={6}
              // lg={4}
              key={id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="success">Info</Button>
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
