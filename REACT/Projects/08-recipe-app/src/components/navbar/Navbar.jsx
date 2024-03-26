import React from 'react'
import {  Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
const Navbar = () => {


  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Clarusway/>"} </i>
        <span>recipe</span>
      </Logo>

      <Hamburger >
        <GiHamburgerMenu />
      </Hamburger>

      <Menu >
        <MenuLink to="/about"> about</MenuLink>
        <a href="https://github.com/" target='blank'>github</a>
        <MenuLink to="/">logout</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar