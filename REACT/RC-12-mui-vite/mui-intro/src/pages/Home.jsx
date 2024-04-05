import Container from "@mui/material/Container"; //performans açısından verimli
import React from "react";
// import {Container} from '@mui/material';//performans açısından problemli ama yazım açısından daha kolay
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MuiElements from "../components/MuiElements";
import InputElem from "../components/InputElem";

const Home = () => {
  return (
    <Container
      maxWidth="xl"
    >
      {/* <MuiElements/> */}
      <InputElem/>

    </Container>
  );
};

export default Home;
