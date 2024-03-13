import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";

//!!! Three types of links can be used in React. NavLink Link and a tag. Which one should you use and when? If you want to create a link within your React app that doesn't require styling while active, use the Link component. If you want to create a link within your React app that requires styling while active, use the NavLink component. Finally, if you want to link to an external page or a non-route page in your React app, use the <a></a> tag.

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            <NavLink
              style={({ isActive }) => ({
                color: isActive && "red",
                width: "100px",
                marginLeft: "auto",
              })}
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                fontSize: isActive && "50px",
                width: "100px",
                marginLeft: "auto",
              })}
              className="nav-link"
              to="/teacher"
            >
              Teacher
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                border: isActive && "2px solid blue",
                width: "100px",
                marginLeft: "auto",
              })}
              className="nav-link"
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                backgroundColor: isActive && "yellow",
                width: "100px",
                marginLeft: "auto",
              })}
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
            <a
              href="https://github.com/clarusway"
              className="nav-link"
              style={{
                width: "100px",
                marginLeft: "auto",
              }}
              target="blank"
            >
              Github
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
