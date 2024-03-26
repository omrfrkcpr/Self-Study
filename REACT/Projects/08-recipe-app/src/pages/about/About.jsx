import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyles'
import codingSvg from "../../assets/coding.svg"

const About = () => {
  return (
    <div>

      <AboutContainer>
        <StyledImage src={codingSvg} />

        <HeaderContainer>
          <h1>
            About Software Developer <span>AshleyMiller </span>
          </h1>
        </HeaderContainer>
        <InfoContainer>
          <h2>Hi, I'am Ashley Miller</h2>
          <h3>I’m currently learning Full-Stack Development Languages.</h3>
          <h4>
            I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
            Java, Hibernate, SpringBoot, AWS Services.
          </h4>
          <h2>
            <a href="mailto:Ashley@clarusway.com">Send email</a> :
            Ashley@clarusway.com
          </h2>
          {/* whatsapp://tel:3216541234 */}
        </InfoContainer>
      </AboutContainer>
    </div>
  );
}

export default About