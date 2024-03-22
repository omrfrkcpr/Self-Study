import React from "react";
import ImageSSS, { LogoSSS } from "./styles/ImageSSS";
import DisplaySSS from "./styles/DisplaySSS";
import ButtonSSS, { DetailButton } from "./styles/ButtonSSS";

const Header = () => {
  return (
    <div>
      <DisplaySSS>
        <LogoSSS src="./images/logo.png" alt="clarusway-logo" />

        <div>
          <ButtonSSS kadir="red">Apply Courses</ButtonSSS>
          <ButtonSSS omer>Talk to Adviser</ButtonSSS>
        </div>
      </DisplaySSS>

      <DisplaySSS>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <ButtonSSS omer>Start Your New Career</ButtonSSS>
          <DetailButton>Details</DetailButton>
        </div>
        <ImageSSS src="./images/hero.jpg" alt="hero" />
      </DisplaySSS>
    </div>
  );
};

export default Header;
