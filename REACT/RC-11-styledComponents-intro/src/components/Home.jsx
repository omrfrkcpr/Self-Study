import React from "react";
import HeaderS, { LinkS } from "./style/HeaderStyle";
import ContainerDivS from "./style/ContainerStyle";
import ButtonS, { YellowButtonS } from "./style/ButtonStyle";

const Home = () => {
  return (
    <ContainerDivS>
      <HeaderS>STYLED COMPONENTS</HeaderS>
      <LinkS href="#">LINK</LinkS>
      <ButtonS saban>Click1</ButtonS>
      <ButtonS elif>Click2</ButtonS>
      <ButtonS>Click3</ButtonS>
      <YellowButtonS>Click4</YellowButtonS>
      <YellowButtonS asiye>Click5</YellowButtonS>
    </ContainerDivS>
  );
};

export default Home;
