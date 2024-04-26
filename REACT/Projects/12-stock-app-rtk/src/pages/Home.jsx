import Container from "@mui/material/Container";
import React from "react";
import PageHeader from "../components/Commons/PageHeader";
import Charts from "../components/Dashboard/Charts";
import KpiCards from "../components/Dashboard/KpiCards";

const Home = () => {
  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Dashboard" />
      <KpiCards />
      <Charts />
    </Container>
  );
};

export default Home;
