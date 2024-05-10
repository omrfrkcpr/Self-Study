import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Full-Stack Developer <span>AnthonyHAROLD </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Anthony HAROLD</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, DJANGO,SQL, and Python.
        </h4>
        <h2>
          <a href="mailto:anthonyharold67@gmail.com">Send email</a> :
          anthonyharold67@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
