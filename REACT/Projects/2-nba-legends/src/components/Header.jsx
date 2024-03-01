import React from "react";
import { Container, Image } from "react-bootstrap";
import logo from "../assets/nba-logo.png";

const Header = () => {
  return (
    <div>
      <Container>
        <Image src={logo} width="200px" />
        <h1 className="my-2 font-monospace display-4 fw-bold">NBA Legends</h1>
      </Container>
    </div>
  );
};

export default Header;
