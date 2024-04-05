import Container from "@mui/material/Container"; //performans açısından verimli
import React from "react";
// import {Container} from '@mui/material';//performans açısından problemli ama yazım açısından daha kolay
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const MuiElements = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        "& .MuiTypography-body1": {
          fontSize: "2rem",
        },
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        align="center"
        color="secondary.main"
        m={5}
      >
        Mui Elements
      </Typography>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        color="error"
        mt={5}
      >
        Mui Elements
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        mt={5}
        sx={{
          bgcolor: "red",
          border: "3px solid blue",
          color: "white",
          fontSize: "1rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        distinctio quibusdam vero quidem voluptates, exercitationem consequatur
        cum similique id voluptatibus accusantium quasi velit facere fugit?
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={3}
        my={4}
        // sx={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   gap: 3,
        // }}
      >
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Box>
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ justifyContent: "center" }}
      >
        <Button variant="outlined" color="success">
          Outlined
        </Button>
        <Button variant="contained" color="error">
          Outlined
        </Button>
        <Button variant="outlined" size="large">
          Outlined
        </Button>
      </Stack>
    </Container>
  );
};

export default MuiElements;
