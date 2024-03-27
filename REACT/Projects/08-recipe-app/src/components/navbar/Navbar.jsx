import React from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <Nav>
      <Logo to="/home" onClick={() => setOpen(false)}>
        <span>Recipe App</span>
      </Logo>

      <Hamburger onClick={() => setOpen(!open)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu fatma={open} onClick={() => setOpen(false)}>
        <MenuLink to="/about"> about</MenuLink>
        <a href="https://github.com/" target="blank">
          github
        </a>
        <MenuLink to="/">
          {location.pathname === "/home" ? "logout" : "login"}
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
