// Login.jsx
import Avatar from "@mui/material/Avatar";
import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/hero.png";
import { Link, useNavigate } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import * as Yup from "yup";
import { loginSuccess } from "../features/authSlice";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required!"),
  password: Yup.string().required("Required!"),
});

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="secondary.main">
            SIGN IN
          </Typography>

          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
              loginSuccess(values);
              navigate("/stock");
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    position: "relative",
                  }}
                >
                  <TextField
                    id="username"
                    name="username"
                    label="Username"
                    inputProps={{ "auto-complete": "off" }}
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                  />
                  <TextField
                    id="password"
                    name="password"
                    inputProps={{ "auto-complete": "off" }}
                    type={`${showPassword ? "text" : "password"}`}
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Box sx={{ position: "absolute", top: 90, right: 10 }}>
                    {showPassword ? (
                      <VisibilityOffIcon
                        size={32}
                        onClick={handlePasswordVisibility}
                      />
                    ) : (
                      <VisibilityIcon
                        size={32}
                        onClick={handlePasswordVisibility}
                      />
                    )}
                  </Box>
                  <Button variant="contained" type="submit">
                    Sign In
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Login;
