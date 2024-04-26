import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
const AuthImage = ({ image }) => {
  return (
    <Grid item display={{ xs: "none",sm:"block" }} sm={10} md={6}>
      <Container>
        <img src={image} alt="img" style={{ width: "100%" }} />
      </Container>
    </Grid>
  );
};

export default AuthImage;
